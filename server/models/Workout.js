const { Schema } = require('mongoose');

const workoutSchema = new Schema({
  macros: {
    type: String,
    required: false,
  }
});

module.exports = workoutSchema;