const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
  messageBody: {
    type: String,
  },
});

const Message = model('Message', messageSchema);

module.exports = Message;