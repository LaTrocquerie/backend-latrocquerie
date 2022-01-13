const dataRouter = require('./data');

const setupRoutes = (app) => {
  app.use('/data', dataRouter);
};

module.exports = { setupRoutes };
