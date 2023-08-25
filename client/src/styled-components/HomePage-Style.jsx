import styled from '@emotion/styled';

export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`;

export const WelcomeContainer = styled.div`
  text-align: center;
`;

export const WelcomeHeading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const WelcomeQuote = styled.h3`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
  
  @media (max-width: 768px) {
    font-size: 14px; 
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
