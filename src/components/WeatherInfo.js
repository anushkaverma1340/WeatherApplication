import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faSnowflake } from "@fortawesome/free-solid-svg-icons";

const WeatherInfo = ({ city, countryCode, weatherData }) => {
  const getWeatherIcon = (temp) => {
    if (temp >= 30) return faSun;
    if (temp > 10 && temp < 30) return faCloud;
    return faSnowflake;
  };

  const getDayOfWeek = () => {
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
    return days[today.getDay()];
  };

  return (
    <div className="weather-info-major">
      <h2>
        {city}, {countryCode}
      </h2>
      <p>{`Today (${getDayOfWeek()})`}</p>{" "}
      <p>
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </p>{" "}
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <div className="additional-info">
        <p>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </p>
        <p>Visibility: {weatherData.visibility} meters</p>
        <p>Cloudiness: {weatherData.clouds.all}%</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
