#!/usr/bin/env node

/****************
 * dependencies *
 ****************/

const fs = require('fs');
var libxmljs = require("libxmljs");
var questions = require('./data/questions');
var program = require('commander');
var inquirer = require('inquirer');

/***********
 * methods *
 ***********/

var isValidXML = function(text) {
  try {
    libxmljs.parseXml(text);
  } catch (e) {
    return false;
  }

  return true;
};

var startNewCast = ()=>{

}

var updateCast = function(podfeed) {

}

/********************
 * application core *
 ********************/

program
  .version('0.1.0')

  .option('-u, --update [file]', 'Update a podcast feed. (Must be valid podcast RSS/Atom.)')
  .parse(process.argv);


if(program.update.length) {
  updateCast(program.update)
} else {
  inquirer
    .prompt(questions.intro)
    .then(answers => {
      if(answers.type == "new") {
        // TODO: make sure the next thing returns a promise such that, at the end,
        //       we can synchronously go to the final outro method
        startNewCast();
      } else {
        inquirer
          .prompt(questions.which)
          .then(answers => {
            updateCast(answers.which);
          });
      }
    });

}
