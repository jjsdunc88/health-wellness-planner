import { useState } from 'react';
import {
  LoginContainer,
  LoginForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/Login-Style";

import { MUTATION_LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [login, { error }] = useMutation(MUTATION_LOGIN);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);

    try {
      const { data } = await login({
        variables: {
          ...formState
        }
      });

      Auth.login(data.login.token);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm onSubmit={handleFormSubmit}>
        <FormInputGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </FormInputGroup>
        <SubmitButton type="submit" value="Submit" className="submitBtn" />
        {showError ? (
          <h4 style={{ color: "red" }}>
            Wrong email or password!
          </h4>
        ) : (
          <></>
        )}
        {showSuccess ? (
          <h4 style={{ color: "green" }}>
            Welcome!
          </h4>
        ) : (
          <></>
        )}
      </LoginForm>
    </LoginContainer>
  )
  return (
    <UpdateContainer>
      <h2>Update Profile</h2>
      <UpdateForm onSubmit={handleFormSubmit} noValidate validated={validated}>
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
      </UpdateForm>
    </UpdateContainer>
  );
}

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <LoginContainer>
//       <h2>Login</h2>
//       <LoginForm>
//         <FormInputGroup>
//           <FormLabel htmlFor="username">Username:</FormLabel>
//           <FormInput
//             type="text"
//             id="username"
//             name="username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </FormInputGroup>
//         <FormInputGroup>
//           <FormLabel htmlFor="password">Password:</FormLabel>
//           <FormInput
//             type="password"
//             id="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormInputGroup>
//         <SubmitButton type="submit" value="Submit" className="submitBtn" />
//       </LoginForm>
//     </LoginContainer>
//   );
// }
