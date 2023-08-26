import styled from '@emotion/styled';

export const MacroButton2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalculateButton2 = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px; 
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const MessageSection2 = styled.section`
  text-align: center;
`;
