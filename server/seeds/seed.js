const db = require('../config/connection');
const { User, Message } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});
