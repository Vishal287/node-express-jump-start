/******************
 * Helpers
 ******************/
const { addUser, getUsers } = require("../helpers/user.helper");

/************************
 * Controller functions
 ************************/
async function createUser(req, res) {
  const userObj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const createdUser = await addUser(userObj);
  res.status(201).send(createdUser);
}

async function users(req, res) {
  const users = await getUsers();
  res.send(users);
}

module.exports = { createUser, users };
