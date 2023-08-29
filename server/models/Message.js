const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
  messageBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  messageType: {
    type: Number,
    required: true
  }
});

const Message = model('Message', messageSchema);

module.exports = Message;