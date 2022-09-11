#! /usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const ora = require('ora')
const ejs = require('ejs')
const path = require('path')
const fse = require('fs-extra')

program.command("create <project-name>") // 增加创建指令
.description("create a new project") // 添加描述信息
.option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
.action((projectName, cmd) => {
  // 处理用户输入create 指令附加的参数
  require('./lib/create')(projectName, cmd)
})

program.command("addCmp <component-name>")
.description("create a new component")
.option("-d, --dir", "specifies directory creation")
.action((name) => {
 const html =  ejs.renderFile(path.join(__dirname, '/template/vue.ejs'), { data: { name }})

})
program.name('lvluo-cli').usage('<command> [option]').version(`lvluo-cli ${require('./package.json').version}`)
program.parse(process.argv);