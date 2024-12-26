const express = require("express");
const Router = express.Router();
const { userController } = require("../controllers/index.js");

Router.post("/create", userController.createUser);
Router.get("/list", userController.users);

module.exports = Router;
