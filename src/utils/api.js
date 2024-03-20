import axios from 'axios';

const API_KEY = '6c44d8daaed5d05d80ff697d3794c07d';

export const fetchWeatherData = async (city, country) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data', error);
  }
};
