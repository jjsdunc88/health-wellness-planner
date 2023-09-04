import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 50px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  h2 {
    transform: scale(1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1);
  
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px; 
`;

export const FormLabel = styled.label`
  font-weight: bold;
  font-family: calibri;
  font-size: 18px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  align-items: center;
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
export const VideoBackground = styled.video`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px; 
`;

export const RadioInput = styled.input`
  margin-right: 10px; 
  order: 2;
`;

export const RadioValue = styled.span`
  font-family: calibri;
  order: 1;
  margin-right: 10px;
`;

export const FormInputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; 
`;