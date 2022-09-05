const fse = require('fs-extra')
const inquirer = require('inquirer')
const path = require('path')
const { promisify } = require('util')
const { spawn } = require('child_process')

const download = promisify(require('download-git-repo'))

module.exports = async function(projectName, options) {
  console.log('开始下载仓库')
 await download('direct:https://github.com/muyeyong/myVueCLI.git#main', path.join(process.cwd(), projectName), { clone: true })
 console.log('下载仓库结束，准备安装依赖')
 const child1 = spawn('npm', ['install'], { stdio: 'inherit', cwd: path.join(process.cwd(), projectName)})
 child1.on('close', (code) => {
  console.log('close...', code)
  // spawn('npm', ['run', 'serve'], { stdio: 'inherit', cwd: path.join(process.cwd(), projectName)})
 })
}