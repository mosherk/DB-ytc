const {promisify} = require('util')
const figlet = promisify(require('figlet')) //11.9k (gzipped:4k)
const clear = require('clear')
const chalk = require('chalk')   //20.1k (gaipped:7.6k)
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')
module.exports = async name => {
    //打印欢迎页面
    clear()
    const data = await figlet('No Bug')
    log(data)

    //项目模板
    log('创建项目' + name)
    await clone('github:myaptx/vue-template',name)
}



