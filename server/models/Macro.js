const { Schema } = require('mongoose');

const macroSchema = new Schema({
  myMacros: {
    type: String,
    required: false,
  }
});

module.exports = macroSchema;
