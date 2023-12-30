#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require('arg');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    });

    logger.debug('Received args', args);

    if (args['--start']) {
        const config = getConfig();
        start(config);
    }
} catch(e) {
    logger.warning(e.message);
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    -${chalk.greenBright('--build')}\tBuilds the app
    `)
}