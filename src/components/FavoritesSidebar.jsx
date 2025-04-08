import styled from '@emotion/styled';
import { useWeather } from '../context/WeatherContext';

const Sidebar = styled.div`
  width: 250px;
  background-color: var(--card-bg);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CityButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-primary);
  transition: background 0.2s ease;

  &:hover {
    background-color: var(--detail-bg);
  }
`;

const SidebarContainer = styled.div`
  width: 220px;
  background-color: var(--card-bg);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`


const Title = styled.h3`
  margin: 0;
  color: var(--text-primary);
`;

const FavoritesSidebar = () => {
  const { favoriteCities, fetchWeatherData } = useWeather();

  if (!favoriteCities.length) return null;

  return (
    <Sidebar>
      <Title>⭐ Favorite Cities</Title>
      {favoriteCities.map((city) => (
        <CityButton key={city} onClick={() => fetchWeatherData(city)}>
          {city}
        </CityButton>
      ))}
    </Sidebar>
  );
};

export default FavoritesSidebar;
