import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaEye, FaCompass, FaTachometerAlt } from 'react-icons/fa';

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const DetailCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  h3 {
    font-size: 1.25rem;
    margin: 0;
    color: var(--text-primary);
  }
  
  svg {
    color: #4299e1;
  }
`;

const DetailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: var(--text-primary);
  }
  
  span {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
`;

const SunriseSunsetCard = ({ sunrise, sunset }) => (
  <DetailCard
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <DetailHeader>
      <FaSun />
      <h3>Sunrise & Sunset</h3>
    </DetailHeader>
    <DetailContent>
      <div>
        <FaSun size={16} />
        <span> Sunrise</span>
        <p>{sunrise}</p>
      </div>
      <div>
        <FaMoon size={16} />
        <span> Sunset</span>
        <p>{sunset}</p>
      </div>
    </DetailContent>
  </DetailCard>
);

const VisibilityCard = ({ visibility }) => (
  <DetailCard
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <DetailHeader>
      <FaEye />
      <h3>Visibility</h3>
    </DetailHeader>
    <DetailContent>
      <p>{visibility} km</p>
    </DetailContent>
  </DetailCard>
);

const PressureCard = ({ pressure }) => (
  <DetailCard
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <DetailHeader>
      <FaTachometerAlt />
      <h3>Pressure</h3>
    </DetailHeader>
    <DetailContent>
      <p>{pressure} hPa</p>
    </DetailContent>
  </DetailCard>
);

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;
  
  const { sunrise, sunset, visibility, pressure } = weatherData;
  
  return (
    <DetailsContainer>
      <SunriseSunsetCard sunrise={sunrise} sunset={sunset} />
      <VisibilityCard visibility={visibility} />
      <PressureCard pressure={pressure} />
    </DetailsContainer>
  );
};

export default WeatherDetails;