import { useState } from "react";
import {
  SignUpContainer,
  SignUpForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/SignUpPage-Style";

import { useMutation } from "@apollo/client";
import { MUTATION_SIGNUP } from "../utils/mutations";

import Auth from '../utils/auth';

export default function SignUp() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [signUp, { error }] = useMutation(MUTATION_SIGNUP);
  const [validated] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);

    try {
      const { data } = await signUp({
        variables: { ...formState },
      });

      Auth.login(data.signUp.token);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <SignUpForm onSubmit={handleFormSubmit} noValidate validated={validated}>
        <FormInputGroup>
          <FormLabel htmlFor='username'>Username: </FormLabel>
          <FormInput type='text' id='username' name='username' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='email'>Email: </FormLabel>
          <FormInput type='email' id='email' name='email' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='password'>Password: </FormLabel>
          <FormInput type='password' id='password' name='password' onChange={handleChange} />
        </FormInputGroup>
        <SubmitButton type='submit' value='Submit' />
        {showError ? (
          <h4 style={{ color: "red" }}>
            Wrong password!
          </h4>
        ) : (
          <></>
        )}
        {showSuccess ? (
          <h4 style={{ color: "green" }}>
            Good Login!
          </h4>
        ) : (
          <></>
        )}
      </SignUpForm>
    </SignUpContainer>
  );
}
