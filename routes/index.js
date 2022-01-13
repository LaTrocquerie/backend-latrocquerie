const router = require('./data');

const setupRoutes = (app) => {
  app.use('/api', router);
};

module.exports = { setupRoutes };
