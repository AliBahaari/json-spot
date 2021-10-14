#!/usr/bin/env node

const jsonSpot = require('../index.js');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');


const argv = yargs(hideBin(process.argv)).argv;

jsonSpot(argv.db, argv.port);