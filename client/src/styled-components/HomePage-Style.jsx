import styled from '@emotion/styled';

export const StyledNavButton = styled.a`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none; 
  font-family: 'Russo One', sans-serif;

  &:hover {
    background-color: #555;
    transform: scale(2.2);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    transform: scale(0.5);
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  background: linear-gradient(to bottom, lightgrey, white);
  padding-top: 10px;
  margin: 200px auto;
  border-radius: 50%;
  width: 50vh;
  height: 30vh;
  @media (max-width: 768px) {
    margin: 220px auto;
    padding: 15px;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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
