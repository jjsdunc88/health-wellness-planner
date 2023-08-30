import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    profileData {
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

export const QUERY_CHAT = gql`
query Chat($message: String!) {
  chat(message: $message) {
    message
  }
}
`;
