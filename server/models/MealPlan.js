const { Schema } = require('mongoose');

const mealPlanSchema = new Schema({
  macros: {
    type: String,
    required: false,
  }
});

module.exports = mealPlanSchema;