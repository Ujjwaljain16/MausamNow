import axios from 'axios';

const API_KEY = 'f486c36c248827b9d17c606d58fea3d8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Convert temperature from Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

// Get weather data for a specific city
export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    
    const { data } = response;
    
    // Format the weather data
    const formattedData = {
      city: data.name,
      country: data.sys.country,
      temperature: kelvinToCelsius(data.main.temp),
      feelsLike: kelvinToCelsius(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      visibility: Math.round(data.visibility / 1000), // Convert meters to kilometers
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

// Get weather icon URL
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};