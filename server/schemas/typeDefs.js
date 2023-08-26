const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  profileData: [Profile]!
}

type Profile {
  age: Int!
  height: Int!
  weight: Int!
  gender: String!
  activity: String!
  goal: String!
  diet: String!
}

type Message {
  message: String!
}

type Auth {
  token: ID!
  user: User
}

input ProfileInput {
  age: Int!
  height: Int!
  weight: Int!
  gender: String!
  activity: String!
  goal: String!
  diet: String!
}

type Query {
  me: User
  chat(message: String!): Message
}

type Mutation {
  login(email: String!, password: String!): Auth
  signUp(username: String!, email: String!, password: String!): Auth
  chat2(input: ProfileInput!): Message
}
`;

module.exports = typeDefs;
