import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorContainer = styled(motion.div)`
  background-color: var(--error-bg);
  color: var(--error-text);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ErrorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <ErrorContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <ErrorIcon>
        <FaExclamationTriangle size={18} />
      </ErrorIcon>
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage;