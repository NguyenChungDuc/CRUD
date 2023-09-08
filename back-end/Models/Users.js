const { default: mongoose, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
  hashPhone: String,
});

module.exports.Users = mongoose.model('Users', userSchema);
