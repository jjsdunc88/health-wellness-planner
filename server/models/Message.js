const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
  messageId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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