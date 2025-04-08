import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import './App.css'

// Import components
import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

// Import context
import { ThemeProvider } from './context/ThemeContext'

// Import services
import { getWeatherData } from './services/weatherService'

// Styled components
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  // Function to fetch weather data
  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    setCity(cityName);
    
    try {
      const data = await getWeatherData(cityName);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch default city on first load
  useEffect(() => {
    fetchWeatherData('London');
  }, []);

  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeToggle />
        
        <Header>
          <Title>Weather Forecast</Title>
          <SearchBar onSearch={fetchWeatherData} isLoading={loading} />
          <AnimatePresence>
            {error && <ErrorMessage message={error} />}
          </AnimatePresence>
        </Header>
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          weatherData && (
            <BentoGrid>
              <WeatherCard weatherData={weatherData} />
              <WeatherDetails weatherData={weatherData} />
            </BentoGrid>
          )
        )}
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
