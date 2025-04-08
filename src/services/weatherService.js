import axios from 'axios';

const API_KEY = 'f486c36c248827b9d17c606d58fea3d8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city, unit = 'metric') => {

  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${unit}`);

    
    const { data } = response;
    
  
    const formattedData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike:Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: Math.round(data.wind.speed * 3.6),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      visibility: Math.round(data.visibility / 1000), 
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timezone: data.timezone,
      dt: new Date(data.dt * 1000).toLocaleString(),
    };
    
    return formattedData;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('City not found. Please check the city name and try again.');
    } else {
      throw new Error('Failed to fetch weather data. Please try again later.');
    }
  }
};

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};