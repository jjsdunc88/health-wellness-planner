const { User } = require('../models');
const { AuthenicationError } = require('../utils/auth');
const axios = require('axios');
const OpenAI = require('openai');
require('dotenv').config();
const Auth = require("../utils/auth");

const reqId = {};

function getNewId() {
  return 'req' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
};

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
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
        return user
      }
      throw AuthenicationError;
    },
  },

  Mutation: {
    signUp: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
      const token = Auth.signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }, context) => {
      if (email) {
        const user = await User.findOne({ email });
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
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { profile: profileData } },
          {
            new: true,
            runValidators: true,
          }
        );

        return user

      }
      throw AuthenicationError;
    },
    updateProfile: async (parent, { updateData }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set:
            {
              "profile.0.weight": updateData.weight,
              "profile.0.activity": updateData.activity,
              "profile.0.goal": updateData.goal,
              "profile.0.diet": updateData.diet
            }
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return user

      }
      throw AuthenicationError;
    },
    chat2: async (parent, { message }) => {
      console.log(openai.baseURL);
      const requestedId = getNewId();
      const responder = async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "I am your personal fitness, nutrition, and lifestyle coach. With your input, I will design workouts and meal plans based on your body type, lifestyle, and goals." },
          { "role": "system", "content": "Before we begin, I need to ask you a few questions." },
          { "role": "user", "content": `${message}` },
          { "role": "system", "content": "What would you like me to do based off your profile data?" },
        ],

        model: "gpt-4",

      })
      // return {
      //   messageBody: chatCompletion.choices[0].message.content
      // }
      reqId[requestedId] = {messageBody: chatCompletion.choices[0].message.content}
    }
      responder();
      return {
        id: requestedId
      }
    },
    addMacros: async (parent, { macros }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "macrosData.myMacros": macros
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    addMealPlan: async (parent, { mealPlan }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "mealPlanData.myMealPlans": mealPlan
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    addWorkout: async (parent, { workout }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "workoutData.myWorkouts": workout
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    deleteMacros: async (parent, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "macrosData.myMacros": {}
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    deleteMealPlan: async (parent, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "mealPlanData.myMealPlans": {}
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    deleteWorkout: async (parent, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              "workoutData.myWorkouts": {}
            }
          },
          { new: true }
        );
        return userData;
      }
    },
    chat2Responder: async (parent, { requestId }, context) => {   
      let out = null;
      if (context.user && reqId.hasOwnProperty(requestId)) {
       out = reqId[requestId];
      } else {
        throw new Error('Not Yet Complete');
      } 
      return out;
  },
},
};

module.exports = resolvers;