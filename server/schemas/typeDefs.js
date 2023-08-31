const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  profileData: Profile
  messages: [Message]!
}

type Profile {
  _id: ID
  age: Int!
  height: Int!
  weight: Int!
  gender: String!
  activity: String!
  goal: String!
  diet: String!
}

type Message {
  _id: ID!
  messageBody: String!
  username: String!
  messageType: Int!
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
  signUp(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addProfile(profileData: ProfileInput!): User
  userUpdate(weight: Int, activity: String, goal: String, diet: String): User
  chat2(message: String!): Message
}
`;

module.exports = typeDefs;
