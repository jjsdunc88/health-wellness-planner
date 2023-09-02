const { User, Message, Macro } = require('../models');
const { AuthenicationError } = require('../utils/auth');
const axios = require('axios');
const OpenAI = require('openai');
require('dotenv').config();
const Auth = require("../utils/auth");


const isLoggedIn = (context) => {
  if (context && context.hasOwnProperty('user') && context.user.hasOwnProperty('_id')) {
    return true;
  }
  return false;
}

const openai = new OpenAI({
  apiKey: process.env.CHAT_API_KEY
});

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
        // console.log(context.user)
        console.log(user.profile[0].age)
        return user
      }
      throw AuthenicationError;
    },
    // chat: async (parent, { message }) => {
    //   const chatCompletion = await openai.chat.completions.create({
    //     messages: [
    //       { "role": "system", "content": "I am your personal fitness, nutrition, and lifestyle coach. With your input, I will design workouts and meal plans based on your body type, lifestyle, and goals." },
    //       { "role": "system", "content": "Before we begin, I need to ask you a few questions." },
    //       { "role": "user", "content": `${message}` },
    //     ],
    //     //add macrobutton prompts here


    //     model: "gpt-3.5-turbo",
    //   });
    //   console.log(JSON.stringify(chatCompletion, null, 2));
    //   return {
    //     message: JSON.stringify(chatCompletion.choices[0].message.content)
    //   }
    // },
  },
  
  Mutation: {
    signUp: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      const token = Auth.signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }, context) => {
      if (email) {
        const user = await User.findOne( { email });
        if (!user) {
          throw new Error('Error: No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new Error('Incorrect login credentials')
        }
        const token = Auth.signToken(user);
        return { token, user };
      }
      throw new Error('Error: No user found with this email address');
    },
    addProfile: async (parent, { profileData }, context) => {
      if (context.user) {
        console.log(profileData)
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: {profile: profileData}},
          {
            new: true,
            runValidators: true,
          }
        );
        
        return user

      }
      throw AuthenicationError;
    },
    updateProfile: async (parent, { profileData }, context) => {
      if (context.user) {
        console.log(profileData)
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: {profile: profileData}},
          {
            new: true,
            runValidators: true,
          }
        );
        
        return user

      }
      throw AuthenicationError;
    },
    userUpdate: async (parent, { weight, activity, goal, diet }, context) => {
      if (loggedIn(context)) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              profileData: {
                weight,
                activity,
                goal,
                diet
              }
            }
          },
          { new: true }
        );
        return userData;
      }
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

        model: "gpt-4",

      })
      // link button to backend

      console.log(JSON.stringify(chatCompletion, null, 2));
      return {
        messageBody: chatCompletion.choices[0].message.content
      }
    },
    addMacros: async (parent, { macro }, context) => {
      if (loggedIn(context)) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              macros: macro
            }
          },
          { new: true }
        );
        return userData;
      }
    },
  },
};

module.exports = resolvers;