import { useState } from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: var(--search-bg);
  color: var(--text-primary);
  font-size: 1rem;
  transition: box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4299e1;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  background-color: #4299e1;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3182ce;
  }
  
  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
`;

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={isLoading}
        />
        <SearchButton type="submit" disabled={!city.trim() || isLoading}>
          {isLoading ? 'Searching...' : <FaSearch />}
        </SearchButton>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;