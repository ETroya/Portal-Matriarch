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
  position: {
    type: String,
    required: "Add position."
    
  }
});

const employee = mongoose.model("employee", adminEmployeeSchema);
module.exports = employee;
