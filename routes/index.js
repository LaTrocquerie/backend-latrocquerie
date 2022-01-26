const routerPages = require("./pages");
const routerHeader = require("./Header");
const routerFooter = require("./Footer");

const setupRoutes = (app) => {
  app.use("/api/pages", routerPages);
  app.use("/api/header", routerHeader);
  app.use("/api/footer", routerFooter);
};

module.exports = { setupRoutes };
