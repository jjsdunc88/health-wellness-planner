const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  profile: [Profile]!
  messages: [Message]!
  macros: Macro
  mealPlan: MealPlan
  workout: Workout
}

type Profile {
  _id: ID!
  age: Int!
  height: Int!
  weight: Int!
  gender: String!
  activity: String!
  goal: String!
  diet: String!
}

type Message {
  _id: ID
  messageBody: String
  username: String
  messageType: Int
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

input UpdateInput {
  weight: Int!
  activity: String!
  goal: String!
  diet: String!
}

type Macro {
  macros: String
}

type MealPlan {
  mealPlan: String
}

type Workout {
  workout: String
}

type Query {
  me: User
  chat(message: String!): Message
}

type Mutation {
  signUp(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addProfile(profileData: ProfileInput!): User
  chat2(message: String!): Message
  updateProfile(updateData: UpdateInput!): User
  addMacros(macros: String!): User
  addMealPlan(mealPlan: String!): User
  addWorkout(workout: String!): User
}
`;

module.exports = typeDefs;
