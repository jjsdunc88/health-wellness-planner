const { Schema, model } = require('mongoose');

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

const Profile = model('Profile', profileSchema);

module.exports = Profile;
