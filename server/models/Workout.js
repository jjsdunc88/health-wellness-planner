const { Schema } = require('mongoose');

const workoutSchema = new Schema({
  myWorkouts: {
    type: String,
    required: false,
  }
});

module.exports = workoutSchema;