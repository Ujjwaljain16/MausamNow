import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import './App.css'

import ThemeToggle from './components/ThemeToggle'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import UnitToggle from './components/UnitToggle'
import FavoritesSidebar from './components/FavoritesSidebar'

import { ThemeProvider } from './context/ThemeContext'
import { WeatherProvider, useWeather } from './context/WeatherContext'


const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const MainContent = styled.div`
  flex: 1;
`

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

function AppContent() {
  const { weatherData, loading, error } = useWeather()

  return (
    <AppContainer>
      <ThemeToggle />

      <Header>
        <Title>MausamNow</Title>
        <SearchBar />
        <UnitToggle />
        <AnimatePresence>
          {error && <ErrorMessage message={error} />}
        </AnimatePresence>
      </Header>

      <ContentWrapper>
      
        <FavoritesSidebar />

      
        <MainContent>
          {loading ? (
            <LoadingSpinner />
          ) : (
            weatherData && (
              <BentoGrid>
                <WeatherCard />
                <WeatherDetails />
              </BentoGrid>
            )
          )}
        </MainContent>
      </ContentWrapper>
    </AppContainer>
  )
}

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </ThemeProvider>
  )
}

export default App
