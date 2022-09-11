const { writeFile, ejsCompile} = require('../utils/file')
const path = require('path')
const { setTemplateUrl } = require('../utils/config')
const addCmp = async (name) => {
  try {
    const html = await ejsCompile(name, 'vue')
    const { message } = writeFile(path.join('src/components', `${name}.vue`), html)
    console.log(message)
  } catch (error) {
    console.error(error)
  }
}

const diyTemplateUrl = (template, url) => {
  const { message, success } = setTemplateUrl(template, url)
  success ? console.log(message) : console.error(message)
}

const addView = async (name) => {
  try {
    const html = await ejsCompile(name, 'vue')
    const router = await ejsCompile(name, 'vue-router')
    writeFile(path.join('src/views', `${name}.vue`), html)
    writeFile(path.join('src/views', `${name}-router.ts`), router)
    console.log(`${name} 创建成功`)
  } catch (error) {
    console.error(error)
  }
}


module.exports = {
  addCmp,
  addView,
  diyTemplateUrl
}