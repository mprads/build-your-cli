const logger = require('../logger')('commands:start');

module.exports = function start(config) {
    logger.highlight('Starting the App');
    logger.debug('Received config in start -', config);
}