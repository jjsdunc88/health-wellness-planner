import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    margin: 220px auto;
    padding: 15px;
  }
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInputGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.input`
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
    padding: 8px 16px; 
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;