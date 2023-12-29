const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');

const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
    const results = configLoader.search(process.cwd());

        if (!results) {
            console.log(chalk.yellow('Could not find config, using default'));
            return { port: 1234 };
        } else {
            console.log('Found Config, -', results.config)
            return results.config
        }
}