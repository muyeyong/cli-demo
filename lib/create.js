const inquirer = require('inquirer')
const path = require('path')
const { promisify } = require('util')
const { spawn } = require('child_process')
const download = promisify(require('download-git-repo'))
const { getTemplateUrl } = require('../utils/config')

module.exports = async function(projectName, options) {
  console.log('开始下载仓库')
  const { result, success, message } = getTemplateUrl('Vue')
  if (!success) {
    console.error(message)
    return
  }
  await download(`direct:${result}`, path.join(process.cwd(), projectName), { clone: true })
  console.log('下载仓库结束，准备安装依赖')
  // TODO 根据不同系统
  const child1 = spawn('npm', ['install'], { stdio: 'inherit', cwd: path.join(process.cwd(), projectName)})
  child1.on('close', (code) => {
    console.log('close...', code)
  })
}