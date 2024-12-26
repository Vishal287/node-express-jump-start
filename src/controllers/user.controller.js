/******************
 * Helpers
 ******************/
const { addUser, getUsers } = require("../helpers/app.helper");

/************************
 * Controller functions
 ************************/
function createUser(req, res) {
  console.log("----------", req.body);
  const userObj = {};

  const createdUser = addUser(userObj);
  res.status(201).send(createdUser);
}

function users(req, res) {
  const users = getUsers();
  res.send(users);
}

module.exports = { createUser, users };
