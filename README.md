# lvluo 脚手架
## 简介

基于 Vue Cli 生成，基本架构是 Vue3.0 + TS + Eslint(airbnb)，保存代码会自动格式化

UI组件使用的antd，支持按需引用

## 特色
支持微前端(qiankun)

自动导入视图路由

自动导入store

提交代码自动检查代码是否规范

自定义模板地址

## 使用

```js
npm install lvluo -g
```

使用帮助：`lvluo -h`

创建项目： `lvluo create projectName`

创建组件：` lvluo addCmp componentName`

创建视图: `lvluo addView viewName`

创建store：`lvluo addStore storeName`

设置模板地址: `lvluo setTempUrl templateType url`，例如设置vue模板的地址，`lvluo setTemp vue https://xxx.xxx`，注意模板项目的目录结构需要跟现有保持一致。

