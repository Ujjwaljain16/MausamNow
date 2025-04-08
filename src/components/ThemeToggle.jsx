import styled from '@emotion/styled';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: var(--detail-bg);
  color: var(--text-primary);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--search-bg);
  }
`;

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </motion.div>
    </ToggleButton>
  );
};

export default ThemeToggle;