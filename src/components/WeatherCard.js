import React, { useState } from "react";

const WeatherCard = ({ city, countryCode, weatherData, day }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const getDayOfWeek = (offset) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const tomorrowIndex = (today.getDay() + 1 + offset) % 7; // Starting from tomorrow
    return days[tomorrowIndex];
  };

  return (
    <div className="weather-info text-center">
      <h2>{day === 0 ? `${getDayOfWeek(0)}` : `${getDayOfWeek(day)}`}</h2>{" "}
      <p>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </p>{" "}
      {<p>Temperature: {weatherData.main.temp}°C</p>}
      <button className="accordion-button" onClick={toggleAccordion}>
        {accordionOpen ? "Close" : "Open"}
      </button>
      {accordionOpen && (
        <div className="accordion-content">
          <p>Weather: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </p>
          <p>Visibility: {weatherData.visibility} meters</p>
          <p>Cloudiness: {weatherData.clouds.all}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
