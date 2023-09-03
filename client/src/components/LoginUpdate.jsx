import { useState } from "react";
import {
  LoginUpdateContainer,
  LoginUpdateForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/LoginUpdatePage-Style";

import { MUTATION_UPDATEPROFILE } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

export default function LoginUpdate() {
  const loggedIn = Auth.loggedIn()
  const [formState, setFormState] = useState({
    weight: '',
    activity: '',
    goal: '',
    diet: '',
  });

  const [updateProfile, { error }] = useMutation(MUTATION_UPDATEPROFILE);
  const [validated] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "weight") {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    }
    else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  }


  const handleProfileData = async (event) => {
    event.preventDefault();
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);

    try {
      const { data } = await updateProfile({
        variables: { updateData: { ...formState } },
      });
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }

    setFormState({
      weight: '',
      activity: '',
      goal: '',
      diet: '',
    })
  };

  return (
    <LoginUpdateContainer>
      <h2>Update Profile</h2>
      <LoginUpdateForm onSubmit={handleProfileData} noValidate validated={validated}>
        <FormInputGroup>
          <FormLabel htmlFor='weight'>Your Weight in Pounds:</FormLabel>
          <FormInput type='number' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='activity'>How Active Are You Currently? </FormLabel>
          <FormInput type='text' id='activity' name='activity' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='diet'>What, if Any, Dietary Restrictions or Allergies Do You Have? </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='goal'>What is Your End Goal? </FormLabel>
          <FormInput type='text' id='goal' name='goal' onChange={handleChange} />
        </FormInputGroup>
        <SubmitButton type='submit' value='Submit' />
        {showError ? (
          <h4 style={{ color: "red" }}>
            Error Updating Profile!
          </h4>
        ) : (
          <></>
        )}
        {showSuccess ? (
          <h4 style={{ color: "green" }}>
            Update Successful!
          </h4>
        ) : (
          <></>
        )}
      </LoginUpdateForm>
    </LoginUpdateContainer>
  );
};