import styled from '@emotion/styled';

export const NutritionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 768px) {
    margin: 220px auto;
    padding: 15px;
  }
`;

export const NutritionHeading = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-family: calibri;
  
  @media (max-width: 768px) {
    font-size: 28px; 
    margin-bottom: 15px; 
  }
  
  @media (max-width: 480px) {
    font-size: 24px; 
  }
`;
