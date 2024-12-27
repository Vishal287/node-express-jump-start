const express = require("express");
const Router = express.Router();
const { userController } = require("../controllers/index.js");
const { createUserValidator } = require("./../validators/user.validator");

Router.post("/create", createUserValidator, userController.createUser);
Router.get("/list", userController.users);

module.exports = Router;
