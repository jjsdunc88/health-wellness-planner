import { gql } from '@apollo/client';

export const MUTATION_SIGNUP = gql`
mutation signUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const MUTATION_LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const MUTATION_ADDPROFILE = gql`
mutation addProfile($profileData: ProfileInput!) {
  addProfile(profileData: $profileData) {
    _id
    username
    email
    profile {
      _id
      age
      height
      weight
      gender
      activity
      goal
      diet
    }
  }
}
`;

export const MUTATION_UPDATEPROFILE = gql` 
mutation Mutation($updateData: UpdateInput!) {
  updateProfile(updateData: $updateData) {
    _id
    email
    username
    profile {
      _id
      age
      height
      weight
      gender
      activity
      goal
      diet
    }
  }
}
`;

export const MUTATION_CHAT2 = gql`
mutation Chat2($message: String!) {
  chat2(message: $message) {
    messageBody
  }
}
`;

export const MUTATION_ADDMACROS = gql`
mutation addMacros($macros: String!) {
  addMacros(macros: $macros) {
    macros
  }
}
`;

export const MUTATION_ADDMEALPLAN = gql`
mutation addMealPlan($mealPlan: String!) {
  addMealPlan(mealPlan: $mealPlan) {
  mealPlan
  }
}
`;

export const MUTATION_ADDWORKOUT = gql`
mutation addWorkout($workout: String!) {
  addWorkout(workout: $workout) {
  workout
  }
}
`;
