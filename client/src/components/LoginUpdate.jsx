import { useState } from "react";
import {
  LoginUpdateContainer,
  LoginUpdateForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
  VideoBackground,
  RadioLabel,
  RadioValue,
  RadioInput,
  FormInputGroupContainer,
} from "../styled-components/LoginUpdatePage-Style";

import { MUTATION_UPDATEPROFILE } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';
import updateVideo from "../assets/updateVideo.mp4";

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
              <VideoBackground autoPlay loop muted>
          <source src={updateVideo} type="video/mp4" />
        </VideoBackground>
      <h2>Update Profile</h2>
      <LoginUpdateForm onSubmit={handleProfileData} noValidate validated={validated}>
        <FormInputGroup>
          <FormLabel htmlFor='weight'>What is Your Current Weight in Pounds</FormLabel>
          <FormInput type='number' id='weight' name='weight' onChange={handleChange} />
        </FormInputGroup>
        {/* activty */}
        <FormInputGroupContainer>
            <FormInputGroup>
              <FormLabel htmlFor='activity'>What is Your New Activity Level? </FormLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity1'
                  name='activity'
                  value='little or no exercise'
                  onChange={handleChange}
                />
                <RadioValue>Little or no exercise</RadioValue>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity2'
                  name='activity'
                  value='exercise 1-3 times per week'
                  onChange={handleChange}
                />
                <RadioValue>Exercise 1-3 times per week</RadioValue>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity3'
                  name='activity'
                  value='exercise 4-5 times per week'
                  onChange={handleChange}
                />
                <RadioValue>Exercise 4-5 times per week</RadioValue>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity4'
                  name='activity'
                  value='daily exercise or intense exercise 3-4 times per week'
                  onChange={handleChange}
                />
                <RadioValue>Daily exercise or intense exercise 3-4 times per week</RadioValue>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity5'
                  name='activity'
                  value='intense exercise 6-7 times per week'
                  onChange={handleChange}
                />
                <RadioValue>Intense exercise 6-7 times per week</RadioValue>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type='radio'
                  id='activity6'
                  name='activity'
                  value='very intense exercise daily or physical job'
                  onChange={handleChange}
                />
                <RadioValue>Very intense exercise daily or physical job</RadioValue>
              </RadioLabel>
            </FormInputGroup>
          </FormInputGroupContainer>

        <FormInputGroup>
          <FormLabel htmlFor='diet'>What, if Any, Dietary Restrictions or Allergies Do You Have? </FormLabel>
          <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
        </FormInputGroup>
        {/* goals */}
        <FormInputGroup>
              <FormLabel htmlFor='goal'>What is Your New Goal?</FormLabel>
              <RadioLabel>
                <RadioValue>Maintain Weight</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal1'
                  name='goal'
                  value='maintain weight'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Mild weight loss of 1/2 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal2'
                  name='goal'
                  value='mild weight loss of 1/2 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Weight loss of 1 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal3'
                  name='goal'
                  value='Weight loss of 1 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Extreme weight loss of 2 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal4'
                  name='goal'
                  value='extreme weight loss of 2 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Mild weight gain of 1/2 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal5'
                  name='goal'
                  value='mild weight gain of 1/2 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Weight gain of 1 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal6'
                  name='goal'
                  value='Weight gain of 1 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Extreme weight gain of 2 lbs. per week</RadioValue>
                <RadioInput
                  type='radio'
                  id='goal7'
                  name='goal'
                  value='extreme weight gain of 2 lbs. per week'
                  onChange={handleChange}
                />
              </RadioLabel>
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