const db = require('../config/connection');
const { User, Message } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const messageData = require('./messageData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await cleanDB('Message', 'messages');

  await User.insertMany(userData);

  await Message.insertMany(messageData);

  console.log('Users and Messages seeded!');
  process.exit(0);
});
