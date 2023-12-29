const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');
const schema = require('./schema.json');
const betterAjvErros = require('better-ajv-errors').default;
const Ajv = require('ajv');
const ajv = new Ajv({ jsonPointes: true });

const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
    const result = configLoader.search(process.cwd());

        if (!result) {
            console.log(chalk.yellow('Could not find config, using default'));
            return { port: 1234 };
        } else {
            const isValid = ajv.validate(schema, result.config);

            if (!isValid) {
                console.log(chalk.yellow('Invalid confg was supplied'));
                console.log();
                console.log(betterAjvErros(schema, result.config, ajv.errors));
                process.exit(1);
            }
            console.log('Found Config, -', result.config)
            return result.config
        }
}