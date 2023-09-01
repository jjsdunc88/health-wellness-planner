const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
  messageBody: {
    type: String,
  },
  username: {
    type: String,
  },
  messageType: {
    type: Number,
  }
});

const Message = model('Message', messageSchema);

module.exports = Message;