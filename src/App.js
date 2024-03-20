import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';
import Accordion from './components/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchWeatherData } from './utils/api';

function App() {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const data = await fetchWeatherData(city, countryCode);
      console.log('Weather data:', data);
      setWeatherData(data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data');
      setWeatherData([]);
    }
  };

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="App">
      <Header />
      <Form
        city={city}
        setCity={setCity}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        handleSubmit={handleSubmit}
      />
      {error && <p className="error">{error}</p>}
      {weatherData && weatherData.main && (
        <WeatherInfo city={city} countryCode={countryCode} weatherData={weatherData} />
      )}
      {weatherData && weatherData.main && (
        <Accordion
          accordionOpen={accordionOpen}
          toggleAccordion={toggleAccordion}
          city={city}
          countryCode={countryCode}
          weatherData={weatherData}
        />
      )}
    </div>
  );
}

export default App;
