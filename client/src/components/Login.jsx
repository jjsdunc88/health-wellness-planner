import React, { useState } from "react";
import {
  LoginContainer,
  LoginForm,
  FormInputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
} from "../styled-components/Login-Style";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm>
        <FormInputGroup>
          <FormLabel htmlFor="username">Username:</FormLabel>
          <FormInput
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInputGroup>
        <SubmitButton type="submit" value="Submit" className="submitBtn" />
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
