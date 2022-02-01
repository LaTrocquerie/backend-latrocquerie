const routerPages = require("./pages");
const routerHeader = require("./header");
const routerFooter = require("./footer");
const routerImage = require("./uploadImage");
const routerEmail = require("./email");
const routerAuth = require("./auth");

const setupRoutes = (app) => {
  app.use("/api/pages", routerPages);
  app.use("/api/header", routerHeader);
  app.use("/api/footer", routerFooter);
  app.use("/api/upload", routerImage);
  app.use("/api/email", routerEmail);
  app.use("/api/auth", routerAuth);
};

module.exports = { setupRoutes };
