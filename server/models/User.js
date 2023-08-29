const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const profileSchema = require('./Profile');

const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Need a vaild email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profileData: [profileSchema],
  });

// hash user password
userSchema.pre('validate', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// validate password for login 
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;
