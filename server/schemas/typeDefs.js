const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  profile: [Profile]!
  macrosData: Macro
  mealPlanData: MealPlan
  workoutData: Workout
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
}

type Macro {
  _id: ID
  myMacros: String
}

type MealPlan {
  _id: ID
  myMealPlans: String
}

type Workout {
  _id: ID
  myWorkouts: String
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

type Query {
  me: User
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
  deleteMacros: User
  deleteMealPlan: User
  deleteWorkout: User
}
`;

module.exports = typeDefs;
