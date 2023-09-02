const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const profileSchema = require('./Profile');
const uniqueValidator = require('mongoose-unique-validator');
const macroSchema = require('./Macro');


const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Need a valid email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profile: [profileSchema],
    macros: macroSchema,
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

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

userSchema.plugin(uniqueValidator);

const User = model('User', userSchema);

module.exports = User;
