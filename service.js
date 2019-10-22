const dotenv = require('dotenv')
const logger = require('./lib/logger');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'dev') {
    logger.info(`Loading Environment Variables from ${process.env.NODE_ENV}.env`);
    dotenv.config( { path: path.resolve(process.cwd(), `./environments/${process.env.NODE_ENV}/.env`) });
}

const server = require('./lib/server.js')
const port = process.env.SERVER_PORT || 4002;
server.listen(port, () => {
  logger.info(`Listening on port ${port}`)
})
