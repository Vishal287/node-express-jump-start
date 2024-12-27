const { body } = require("express-validator");

const createUserValidator = [
  body("name").isObject(),
  body("name.first").notEmpty().isString(),
  body("name.last").notEmpty().isString(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty().isStrongPassword(),
];

module.exports = {
  createUserValidator,
};