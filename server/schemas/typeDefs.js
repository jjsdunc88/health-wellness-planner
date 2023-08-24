const typeDefs = `
type Message {
  message: String!
}

type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    test: Message
    tech: [Tech]
    matchups(_id: String): [Matchup]
    chat(message: String!): Message
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    chat2(message: String!): Message
  }
`;

module.exports = typeDefs;
