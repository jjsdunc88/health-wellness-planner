const { Tech, Matchup } = require('../models');
const OpenAI = require('openai');
require('dotenv').config();




const openai = new OpenAI({
  apiKey: process.env.CHAT_API_KEY,
});

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
    //     chat: async (parent, { message }) => {
    //       const chatCompletion = await openai.chat.completions.create({
    //         messages: [
    //           {"role": "system", "content": "I am your personal fitness, nutrition, and lifestyle coach. With your input, I will design workouts and meal plans based on your body type, lifestyle, and goals." },
    //           {"role": "system", "content": "Before we begin, I need to ask you a few questions."},
    //           {"role": "user", "content": `${message}`},
    //         ],
    //         //add macrobutton prompts here


    //         model: "gpt-3.5-turbo",      
    //       });
    //       console.log(JSON.stringify(chatCompletion, null, 2));
    //       return {
    //        message: JSON.stringify(chatCompletion.choices[0].message.content)
    //       }
    // },  
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
    chat2: async (parent, { message }) => {
      console.log(message);
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "I am your personal fitness, nutrition, and lifestyle coach. With your input, I will design workouts and meal plans based on your body type, lifestyle, and goals." },
          { "role": "system", "content": "Before we begin, I need to ask you a few questions." },
          { "role": "user", "content": `${message}` },
          { "role": "system", "content": "What would you like me to do based off your profile data?" },
        ],

        model: "gpt-3.5-turbo",

      })
      // link button to backend
      
      console.log(JSON.stringify(chatCompletion, null, 2));
      return {
        message: chatCompletion.choices[0].message.content
      }
    },
  },
};

module.exports = resolvers;