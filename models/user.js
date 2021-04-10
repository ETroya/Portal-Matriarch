const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myFirstDatabaseSchema = new Schema({
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
});

const User = mongoose.model("User", myFirstDatabaseSchema);
module.exports = User;
