const fse = require('fs-extra')
const inquirer = require('inquirer')
const path = require('path')
const { getZhuRongRepo, getTagsByRepo } = require('./api')


const getRepoInfo = async() => {
  const repoInfo = await getZhuRongRepo()
  
  console.log('repoInfo', repoInfo)
}

const getTagInfo = () => {

}

module.exports = async function(projectName, options) {
  getRepoInfo()
  return
  const cwd = process.cwd()
  const targetDir =  path.join(cwd, projectName)
  if (fse.existsSync(targetDir)) {
    if (options.force) {
      fse.removeSync(targetDir)
    } else {
     const { isOverwrite } =  await inquirer.prompt([{
        name: "isOverwrite", 
        type: "list", 
        message: "Target directory exists, Please choose an action",
        choices: [
          { name: "Overwrite", value: true },
          { name: "Cancel", value: false },
          ],
        }
      ])
      if (isOverwrite) {
        fse.removeSync(targetDir)
      } else {
        return
      }
    }
  } else {
    fse.mkdirSync(targetDir)
  }
}