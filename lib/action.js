const { writeFile, ejsCompile} = require('../utils/file')
const path = require('path')
const addCmp = async (name) => {
  try {
    const html = await ejsCompile(name)
    const { message } = writeFile(path.join('src/components', `${name}.vue`), html)
    console.log(message)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addCmp
}