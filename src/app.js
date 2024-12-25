/************************
 * 3rd party libraries
 ************************/
const Express = require("express");
const app = Express();

/******************
 * Routes
 ******************/
const routes = require("./routes/index");

/******************
 * configurations
 ******************/
app.use("/api", routes);

module.exports = app;
