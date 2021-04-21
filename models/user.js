const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminEmployeeSchema = new Schema({
  username: {
    type: String,
    required: "Enter a new user name.",
    unique: true,
    trim: true,
  },
  first: {
    type: String,
    trim: true,
    required: true,
  },
  last: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: "Enter a new password.",
    trim: true,
  },
  city: {
    type: String,
    required: "Enter their city.",
    trim: true,
  },
  wage: {
    type: Number,
    required: "Enter their wage.",
    trim: true,
  },
  hours: {
    type: Number,
    required: true,
    trim: true,
  },
  pto: {
    type: Number,
    required: true,
    trim: true,
  },
  upt: {
    type: Number,
    required: true,
    trim: true,
  },
  vacation: {
    type: Number,
    required: true,
    trim: true,
  },
  admin: {
    type: Boolean,
  },
});

const employee = mongoose.model("employee", adminEmployeeSchema);
module.exports = employee;
