#!/usr/bin/env node
import chalk from 'chalk'
import arg from 'arg'

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean
    });

    if (args['--start']) {
        console.log(chalk.bgCyanBright('starting the app'));
    }
} catch(e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright(tool [CMD])}
    ${chalk.greenBright('--start')}\tStarts the app
    -${chalk.greenBright('--build')}\tBuilds the app
    `)
}