import { useState } from "react";
import {
  ProfileContainer,
  ProfileForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
  VideoBackground,
  RadioLabel,
  RadioValue,
  RadioInput,
  FormInputGroupContainer,
} from "../styled-components/ProfileData-Style";
import { NavButton } from "../styled-components/Nav-Style";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_ADDPROFILE } from "../utils/mutations";
import Auth from '../utils/auth';
import profileVideo from '../assets/profile-video.mp4';

export default function ProfileData() {
  const loggedIn = Auth.loggedIn()
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    activity: '',
    goal: '',
    diet: '',
  });

  const [addProfile, { error }] = useMutation(MUTATION_ADDPROFILE);
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
      navigate("/nutrition")
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

  return (<>
    {loggedIn ? (
      <ProfileContainer>
        <VideoBackground autoPlay loop muted>
          <source src={profileVideo} type="video/mp4" />
        </VideoBackground>
        <h2>For The Best Experience, Please Provide The Following Details About Yourself</h2>
        <ProfileForm onSubmit={handleProfileData} noValidate validated={validated}>
          <FormInputGroup>
            <FormLabel htmlFor='age'>Your Age: </FormLabel>
            <FormInput type='number' id='age' name='age' onChange={handleChange} />
          </FormInputGroup>
          <FormInputGroup>
            <FormLabel htmlFor='height'>Your Height in Inches: </FormLabel>
            <FormInput type='number' id='height' name='height' onChange={handleChange} />
          </FormInputGroup>
          <FormInputGroup>
            <FormLabel htmlFor='weight'>Your Weight in Pounds: </FormLabel>
            <FormInput type='number' id='weight' name='weight' onChange={handleChange} />
          </FormInputGroup>
          {/* gender */}
          <FormInputGroupContainer>
            <FormInputGroup>
              <FormLabel htmlFor="gender">What is Your Gender</FormLabel>
              <RadioLabel>
                <RadioValue>Male</RadioValue>
                <RadioInput
                  type="radio"
                  id="gender"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
              </RadioLabel>
              <RadioLabel>
                <RadioValue>Female</RadioValue>
                <RadioInput
                  type="radio"
                  id="gender"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
              </RadioLabel>
            </FormInputGroup>
          </FormInputGroupContainer>
          {/* activity */}
          <FormInputGroupContainer>
            <FormInputGroup>
              <FormLabel htmlFor='activity'>How Active Are You Currently? </FormLabel>
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
                  value='daily exercise of intense exercise 3-4 times per week'
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
          <FormInputGroupContainer>
            {/* goal */}
            <FormInputGroup>
              <FormLabel htmlFor='goal'>What is Your End Goal?</FormLabel>
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
          </FormInputGroupContainer>
          <FormInputGroup>
            <FormLabel htmlFor='diet'>What, if Any, Dietary Restrictions or Allergies Do You Have?</FormLabel>
            <FormInput type='text' id='diet' name='diet' onChange={handleChange} />
          </FormInputGroup>
          <SubmitButton type='submit' value='Submit' />
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
      </ProfileContainer>) : (<div>
        You must be logged in.
      </div>)}
  </>);
}