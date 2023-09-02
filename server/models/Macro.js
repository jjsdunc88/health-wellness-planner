const { Schema } = require('mongoose');

const macroSchema = new Schema({
  macros: {
    type: String,
    required: false,
  }
});

module.exports = macroSchema;
