const axios = require("axios");
// const { Octokit } = require('@octokit/core')
// const octokit = new Octokit({
//   auth: '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'
// })



// async function getZhuRongRepo() {
//   return await octokit.request('GET /orgs/{org}/repos', {
//     org: 'muyeyong'
//   })
// }

// module.exports = {
//   getZhuRongRepo
// }

// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板
 * @returns Promise 仓库信息
 */
async function getZhuRongRepo() {
  return axios.get("https://api.github.com/orgs/muyeyong/repos",  {
    headers:{
        "Authorization": 'token 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'
    }
});
}

/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise 版本信息
 */
async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/muyeyong/${repo}/tags`);
}

module.exports = {
  getZhuRongRepo,
  getTagsByRepo,
};

