import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Spinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid var(--spinner-bg);
  border-top-color: var(--spinner-color);
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;