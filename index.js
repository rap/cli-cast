#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const inquirer = require('inquirer');

/*
 *  https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac
 */

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
