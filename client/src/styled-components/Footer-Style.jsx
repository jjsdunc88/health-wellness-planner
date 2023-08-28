import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  font-family: 'Oswald', sans-serif; 
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const GitHubImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
