#! /usr/bin/env node
"use strict";

const commander = require('commander'); // const chalk = require('chalk')
// import inquirer from 'inquirer'
// const inquirer = require('inquirer')


const ora = require('ora').default; // import ora from 'ora'


inquirer.prompt([{
  name: "vue",
  // 多选交互功能
  // 单选将这里修改为 list 即可
  type: "checkbox",
  message: "Check the features needed for your project:",
  choices: [{
    name: "Babel",
    checked: true
  }, {
    name: "TypeScript"
  }, {
    name: "Progressive Web App (PWA) Support"
  }, {
    name: "Router"
  }]
}]).then(data => {
  console.log(data);
});
commander.name('lvluo-cli').usage('<command> [option]').version('1.0.0');
commander.parse(process.argv); // const a = require('./a.js')
// const b = require('./b.js').default
// import a from './a.js'
// import b from './b.js'
// a()
// b()