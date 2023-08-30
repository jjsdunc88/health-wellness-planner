import { useState } from "react";
import {
  ProfileContainer,
  ProfileForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/ProfileData-Style";
import { NavButton } from "../styled-components/Nav-Style";

import { useMutation } from "@apollo/client";
import { MUTATION_PROFILEDATA } from "../utils/mutations";

import Auth from '../utils/auth';

export default function ProfileData() {
  const [formState, setFormState] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    activity: '',
    goal: '',
    diet: '',
  });

  const [profileData, { error }] = useMutation(MUTATION_PROFILEDATA);
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

  const handleProfileData = async (profileId) => {
   const dataToSave = profileData.find((profile) => profile._id === profileId);
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
        return false;
    }

    try {
      const { data } = await profileData({
        variables: { userData: { ...dataToSave } },
      });
      setShowSuccess([ ...userData, dataToSave.profileId  ]);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  };

  return (
    <ProfileContainer>
      <h2>For The Best Experience, Please Provide The Following Details About Yourself</h2>
      <ProfileForm onSubmit={handleProfileData} noValidate validated={validated}>
        <FormInputGroup>
          <FormLabel htmlFor='age'>Your Age: </FormLabel>
          <FormInput type='text' id='age' name='age' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='height'>Your Height in Inches: </FormLabel>
          <FormInput type='text' id='height' name='height' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='weight'>Your Weight in Pounds </FormLabel>
          <FormInput type='text' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='gender'>Male or Female </FormLabel>
          <FormInput type='text' id='gender' name='gender' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='activity'>How Active Are You Currently? </FormLabel>
          <FormInput type='text' id='activity' name='activity' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='goal'>What is Your End Goal? </FormLabel>
          <FormInput type='text' id='goal' name='goal' onChange={handleChange} />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor='diet'>What, if Any, Dietary Restrictions or Allergies do You Have? </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        <NavButton href="/nutrition" type='submit' value='Submit' />
        {showError ? (
          <h4 style={{ color: "red" }}>
            Error Compiling Profile Data!
          </h4>
        ) : (
          <></>
        )}
        {showSuccess ? (
          <h4 style={{ color: "green" }}>
            Profile Data Recorded
          </h4>
        ) : (
          <></>
        )}
      </ProfileForm>
    </ProfileContainer>
  );
}