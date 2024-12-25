/************************
 * 3rd party libraries
 ************************/
const Router = require("express").Router();

/******************
 * Routes
 ******************/
const appRoutes = require("./app.route");

/******************
 * configurations
 ******************/
Router.use("/app", appRoutes);

module.exports = Router;
