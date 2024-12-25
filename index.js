const appConfig = require("./src/config/app.config");
const app = require("./src/app");

app.listen(appConfig.PORT, () => {
  console.log(`Application listen on ${appConfig.PORT}`);
});
