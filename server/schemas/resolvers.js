const { Tech, Matchup } = require('../models');
const OpenAI = require('openai');
require('dotenv').config();

const resolvers = {
  Query: {
      test: async () => {
        return {
          message: "It's working!"
        }
      },
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
    chat: async () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_API_KEY,
  });  
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
  });
},  
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
