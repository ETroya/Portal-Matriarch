const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminEmployeeSchema = new Schema({
  username: {
    type: String,
    required: "Enter a new user name.",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "Enter a new password.",
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

  admin: {
    type: Boolean,
    position: true,
  },

  city: {
    type: String,
    required: "Add a city.",
    trim: true,
  },
});

const employee = mongoose.model("employee", adminEmployeeSchema);
module.exports = employee;
