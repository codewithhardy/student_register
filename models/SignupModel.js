const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mytable", signUpTemplate);
