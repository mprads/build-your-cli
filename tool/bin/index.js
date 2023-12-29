#!/usr/bin/env node
const chalk = require('chalk');
const arg = require('arg');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    });

    if (args['--start']) {
        const config = getConfig();
        start(config);
    }
} catch(e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    -${chalk.greenBright('--build')}\tBuilds the app
    `)
}