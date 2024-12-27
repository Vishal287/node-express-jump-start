const UserModel = require("./../database/schemas/user.schema");

async function addUser(userData) {
  return UserModel.create(userData);
}

async function getUsers() {
  return UserModel.find({});
}

module.exports = {
  addUser,
  getUsers,
};
