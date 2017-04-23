#!/usr/bin/env node

const program = require('commander');
const pkg = require('./package.json');
const copier = require('copy-paste');
const chalk = require('chalk');

program
    .version(pkg.version)
    .usage('<count> [text]')
    .parse(process.argv);

const count = Number(program.args[0]);
const text = program.args[1] || '';

const repeated = text.repeat(count);

copier.copy(repeated, () => {
    console.log(`✅  Copied ${chalk.green(repeated)}`);
});
