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
          <FormLabel htmlFor='weight'>What is Your Current Weight in Pounds</FormLabel>
          <FormInput type='number' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='activity'>What is Your New Activity level?</FormLabel>
          <FormInput type='radio' id='activity' name='activity' value='little or no exercise' onChange={handleChange} />Little or no exercise
            <FormInput type='radio' id='activity' name='activity' value='exercise 1-3 times per week' onChange={handleChange} />Exercise 1-3 times per week
            <FormInput type='radio' id='activity' name='activity' value='exercise 4-5 times per week' onChange={handleChange} />Exercise 4-5 times per week
            <FormInput type='radio' id='activity' name='activity' value='daily exercise or intense exercise 3-4 times per week' onChange={handleChange} />Daily exercise of intense exercise 3-4 times per week
            <FormInput type='radio' id='activity' name='activity' value='intense exercise 6-7 times per week' onChange={handleChange} />Intense exercise 3-4 times per week
            <FormInput type='radio' id='activity' name='activity' value='very intense exercise daily or physical job' onChange={handleChange} />Very intense exercise daily or physical job
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='diet'>What, if Any, Dietary Restrictions or Allergies Do You Have? </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='goal'>What is Your New Goal? </FormLabel>
          <FormInput type='radio' id='goal' name='goal' value='maintain weight' onChange={handleChange} />Maintain Weight
            <FormInput type='radio' id='goal' name='goal' value='mild weight loss of 1/2 lbs. per week' onChange={handleChange} />Mild weight loss of 1/2 lbs. per week
            <FormInput type='radio' id='goal' name='goal' value='Weight loss of 1 lbs. per week' onChange={handleChange} />Weight loss of 1 lbs. per week
            <FormInput type='radio' id='goal' name='goal' value='extreme weight loss of 2 lbs. per week' onChange={handleChange} />Extreme weight loss of 2 lbs. per week
            <FormInput type='radio' id='goal' name='goal' value='mild weight gain of 1/2 lbs. per week' onChange={handleChange} />Mild weight gain of 1/2 lbs. per week
            <FormInput type='radio' id='goal' name='goal' value='Weight gain of 1 lbs. per week' onChange={handleChange} />Weight gain of 1 lbs. per week
            <FormInput type='radio' id='goal' name='goal' value='extreme weight gain of 2 lbs. per week' onChange={handleChange} />Extreme weight gain of 2 lbs. per week
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