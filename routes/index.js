const dataRouter = require('./data');
const authRouter = require('./auth');

const setupRoutes = (app) => {
  app.use('/data', dataRouter);
  app.use('/auth', authRouter);
};

module.exports = { setupRoutes };
