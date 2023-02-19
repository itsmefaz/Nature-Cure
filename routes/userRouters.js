const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userCtrl");
//creating router object
const routers = express.Router();
//creating routes
routers.route("/login", loginController);
routers.route("/register", registerController);

module.exports = routers;
