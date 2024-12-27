/************************
 * 3rd party libraries
 ************************/
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String },
  },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("user", UserSchema);

User.on("save", () => {
  if (this.password) {
    this.password = this.password.replace("@", "##");
  }
});
module.exports = User;
