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
    age: '',
    height: '',
    weight: '',
    gender: '',
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
    if (name === "age" || name === "height" || name === "weight") {
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
  };

  const handleProfileData = async (event) => {
    event.preventDefault();
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);



    try {
      const { data } = await addProfile({
        variables: { profileData: { ...formState } },
      });
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }

    setFormState({
      age: '',
      height: '',
      weight: '',
      gender: '',
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
          <FormLabel htmlFor='weight'>Weight: </FormLabel>
          <FormInput type='text' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='activity level'>Activity Level: </FormLabel>
          <FormInput type='text' id='activity' name='activity level' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='diet'>Diet: </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='goal'>Goals </FormLabel>
          <FormInput type='text' id='goal' name='goals' onChange={handleChange} />
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
}