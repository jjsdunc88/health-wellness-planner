import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px; 
  margin-right: 50px;
  
  @media (min-width: 768px) {
    font-size: 32px; 
    margin-bottom: 0; 
  }
`;

export const StyledLink = styled.a`
  color: white;
  font-family: Lato, sans-serif;
  font-size: 24px; 
  font-weight: bold;
  text-decoration: none;
  margin: 5px 0;
  margin-left: 50px;
  transition: transform 0.3s ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 32px; 
    margin: 0;
  }
`;
