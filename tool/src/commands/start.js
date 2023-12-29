const chalk = require('chalk');

module.exports = function start(config) {
    console.log(chalk.bgCyanBright('Starting the App'));
    console.log(chalk.gray('Received config in start -'), config);
}