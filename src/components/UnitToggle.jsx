import styled from '@emotion/styled'
import { useWeather } from '../context/WeatherContext'

const ToggleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    background-color: var(--card-bg);
    color: var(--text-primary);

    &:disabled {
      background-color: #4299e1;
      color: white;
    }
  }
`

const UnitToggle = () => {
  const { unit, setUnit } = useWeather()

  return (
    <ToggleWrapper>
      <button onClick={() => setUnit('metric')} disabled={unit === 'metric'}>°C</button>
      <button onClick={() => setUnit('imperial')} disabled={unit === 'imperial'}>°F</button>
    </ToggleWrapper>
  )
}

export default UnitToggle
