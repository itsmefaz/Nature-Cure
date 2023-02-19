const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field is required"],
  },
  email: {
    type: String,
    required: [true, "The email field is required"],
  },
  password: {
    type: String,
    required: [true, "The password field is required"],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
