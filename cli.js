#! /usr/bin/env node
const commander = require('commander')
const inquirer = require('inquirer')
const ora = require('ora')

commander.command("create <project-name>") // 增加创建指令
.description("create a new project") // 添加描述信息
.option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
.action((projectName, cmd) => {
  // 处理用户输入create 指令附加的参数
  require('./lib/create')(projectName, cmd)
})

commander.name('lvluo-cli').usage('<command> [option]').version(`lvluo-cli ${require('./package.json').version}`)
commander.parse(process.argv);