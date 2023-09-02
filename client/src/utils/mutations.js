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
mutation Mutation($profileData: ProfileInput!) {
  updateProfile(profileData: $profileData) {
    _id
    email
    username
    profile {
      _id
      activity
      age
      diet
      goal
      weight
    }
    messages {
      _id
      messageBody
      messageType
      username
    }
  }
}
`;

export const MUTATION_USERUPDATE = gql`
mutation UserUpdate($weight: Int!, $activity: String!, $goal: String!, $diet: String!) {
  userUpdate (weight: $weight, activity: $activity, goal: $goal, diet: $diet) {
  token
  user {
    Profile
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
