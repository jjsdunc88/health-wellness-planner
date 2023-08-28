const { Schema } = require('mongoose');

const profileSchema = new Schema({
  age: {
    type: Number,
    required: true,
  },
   height: {
    type: Number,
    required: true,
  },
   weight: {
    type: Number,
    required: true,
  },
   gender: {
    type: String,
    required: true,
  },
   activity: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
});

module.exports = profileSchema;
