/**
 * Author: Isamu Isozaki
 * Starts app
 */
require("module-alias/register");

require("env-smart").load();

const { APP_PORT } = require("@/config");
 
/**
 * Connect to database
 * Start node server
 */
async function startApp() {
  await require("@/database").connect();
  startExpressApp();
}
/**
 * cors
 * some parsing
 * apply middlewares for user, cors, and responses
 * apply routes for urls that start with v1 and otherwise access index.js of react build
 * starts node js server
 */
async function startExpressApp() {
  const express = require("express");
  const app = express();
  const path = require('path');

  const { landingPageCors } = require('@/middlewares/cors');
  app.use(landingPageCors);
  
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  
  const cookieParser = require("cookie-parser");
  app.use(cookieParser());

  const responsesMiddleware = require("@/middlewares/responses");
  app.use(responsesMiddleware);
  
  const routes = require("@/app/routes");
  app.use("/v1", routes);
  
  const reactRoot = path.join(__dirname, "portfolio/build");
  app.use(express.static(reactRoot));

  app.get("*", (req, res) => {
    res.sendFile('index.html', { root: reactRoot });
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.serverError();
  });

  app.use((req, res) => res.notFound());

  app.listen(APP_PORT, () => {
    console.log(`Server listening on port ${APP_PORT}`);
  });
}

startApp();
