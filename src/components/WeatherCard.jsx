import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getWeatherIconUrl } from '../services/weatherService';
import { FaTemperatureHigh, FaWind, FaCloudRain } from 'react-icons/fa';

const Card = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CityInfo = styled.div`
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--text-primary);
  }
  
  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0.25rem 0 0 0;
  }
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-primary);
  }
  
  span {
    font-size: 1.5rem;
    color: var(--text-secondary);
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 64px;
    height: 64px;
  }
  
  p {
    font-size: 1.125rem;
    color: var(--text-primary);
    margin: 0;
    text-transform: capitalize;
  }
`;

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--detail-bg);
  padding: 0.75rem;
  border-radius: 8px;
  
  span {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
  
  p {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: var(--text-primary);
  }
`;

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;
  
  const {
    city,
    country,
    temperature,
    description,
    icon,
    humidity,
    windSpeed,
    feelsLike
  } = weatherData;
  
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader>
        <CityInfo>
          <h2>{city}</h2>
          <p>{country}</p>
        </CityInfo>
        <Temperature>
          <h1>{temperature}</h1>
          <span>°C</span>
        </Temperature>
      </CardHeader>
      
      <WeatherInfo>
        <img src={getWeatherIconUrl(icon)} alt={description} />
        <p>{description}</p>
      </WeatherInfo>
      
      <WeatherDetails>
        <DetailItem>
          <FaTemperatureHigh size={20} />
          <span>Feels Like</span>
          <p>{feelsLike}°C</p>
        </DetailItem>
        <DetailItem>
          <FaCloudRain size={20} />
          <span>Humidity</span>
          <p>{humidity}%</p>
        </DetailItem>
        <DetailItem>
          <FaWind size={20} />
          <span>Wind</span>
          <p>{windSpeed} km/h</p>
        </DetailItem>
      </WeatherDetails>
    </Card>
  );
};

export default WeatherCard;