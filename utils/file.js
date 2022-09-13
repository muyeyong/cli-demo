
const fse = require('fs-extra')
const ejs = require('ejs')
const path = require('path')

const writeFile = (filePath, content) => {
  if (fse.existsSync(filePath)) {
    return { success: false, message: `${filePath}已经存在`}
  }
  fse.ensureFileSync(filePath)
  fse.writeFileSync(filePath, content)
  return { success: true, message: `${filePath}创建成功`}
}

/* 
  获取对应的文件模板 vue react
  配置里面去获取项目类型
 */
const ejsCompile = (name, type) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(path.join(__dirname, `../template/${type}.ejs`), { data: { name }}).then( html => {
      resolve(html)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = {
  writeFile,
  ejsCompile
}