import { gql } from '@apollo/client';

export const MUTATION_SIGNUP = gql`
mutation SignUp($username: String!, $email: String!, $password: String!) {
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
mutation Login($email: String!, $password: String!) {
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

export const MUTATION_CHAT2 = gql`
mutation Chat2($message: String!) {
  chat2(message: $message) {
    message
  }
}
`;
