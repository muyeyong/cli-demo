#! /usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const ora = require('ora')
const createProject = require('./lib/create')
const { addCmp, diyTemplateUrl, addView } = require('./lib/action')


program.command("create <project-name>") 
.description("create a new project") 
.option("-f, --force", "overwrite target directory if it exists")
.action(createProject)

program.command("addCmp <component-name>")
.description("create a new component")
.option("-d, --dir", "specifies directory creation")
.action(addCmp)


program.command("addView <component-name>")
.description("create a new view")
.option("-d, --dir", "specifies directory creation")
.action(addView)

program.command("setTemUrl <template> <url>")
.description("set template url,for example: vue https://github.com/muyeyong/myVueCLI.git#main")
.action(diyTemplateUrl)



program.name('lvluo-cli').usage('<command> [option]').version(`lvluo-cli ${require('./package.json').version}`)
program.parse(process.argv);