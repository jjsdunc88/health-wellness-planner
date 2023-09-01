import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    profile {
      age
      height
      weight
      gender
      activity
      goal
      diet
    }
    messages {
      _id
      messageBody
      username
      messageType
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
