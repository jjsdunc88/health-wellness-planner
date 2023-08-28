import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
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
