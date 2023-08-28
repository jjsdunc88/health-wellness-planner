import styled from '@emotion/styled';

export const NavContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavButton = styled.a`
  display: block;
  border-radius: 10px;
  background: lightgray;
  padding: 7px 10px;
  margin-right: 10px;
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ccc;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 8px; 
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
