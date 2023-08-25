import React, { useState } from "react";
import {
  SignUpContainer,
  SignUpForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/SignUpPage-Style";

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <SignUpForm>
        <FormInputGroup>
          <FormLabel htmlFor='username'>Username: </FormLabel>
          <FormInput type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='password'>Password: </FormLabel>
          <FormInput type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='email'>Email: </FormLabel>
          <FormInput type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
        </FormInputGroup>
        <SubmitButton type='submit' value='Submit' />
      </SignUpForm>
    </SignUpContainer>
  );
}

export default SignUp;
