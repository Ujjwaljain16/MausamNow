import { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [favoriteCities, setFavoriteCities] = useState(() => {
    const stored = localStorage.getItem('favoriteCities');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
  }, [favoriteCities]);
  const toggleFavorite = (cityName) => {
    setFavoriteCities((prev) =>
      prev.includes(cityName)
        ? prev.filter((c) => c !== cityName)
        : [...prev, cityName]
    );
  };

  const fetchWeatherData = async (cityName = city, unitType = unit) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(cityName, unitType);
      setWeatherData(data);
      setCity(cityName); 
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchWeatherData(city, unit);
  }, [unit]);


  useEffect(() => {
    fetchWeatherData(city, unit);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        loading,
        error,
        fetchWeatherData,
        unit,
        setUnit,
        favoriteCities,
        toggleFavorite, 
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
