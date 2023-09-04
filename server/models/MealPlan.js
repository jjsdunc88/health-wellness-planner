const { Schema } = require('mongoose');

const mealPlanSchema = new Schema({
  myMealPlans: {
    type: String,
    required: false,
  }
});

module.exports = mealPlanSchema;