//打印欢迎页面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk  = require('chalk')
const log = content =>console.log(chalk.blue(content))
const {clone} = require('./download')
const open = require('open')

// import {clone} from './download'

// const {spawn} = require('child_process')

const spawn = async(...args) =>{
    //promise api
    const {spawn} = require('child_process')
    //windows下需要添加的
    const options = args[args.length - 1]
    if(process.platform === 'win32'){
        console.log('win32')
        // options.cmd = options.cwd
        // delete options.cwd
        //设置shell 选项为true 以隐式地调用swd
        options.shell = true
    }else{
        console.log("linux/unix")
    }
    //封装promise风格接口
    return new Promise(resolve =>{
        const proc = spawn(...args)
        //输出流  子进程 合并到主进程
        proc.stdout.pipe(process.stdout)
        proc.stdout.pipe(process.stderr)
        //监听close
        proc.on('close',() => {
            //拓展
            resolve()
        })
    })
}

module.exports = async name => {
    //打印欢迎页面
    clear()
    const data = await figlet('Shaoqi',{font:'roman'})
    log(data)

    //项目模板
    log('创建项目' + name)
    // await clone('github:su37josephxia/vue-template',name)

    //下载依赖
    //子进程
    // spawn('npm',['install'])//不是同步 -》promise api
    log('依赖安装中...')
    //cwd,到对应的项目目录里执行
    //windows不兼容
    // await spawn('npm',['install'],{cwd:`./${name}`})
    log(chalk.green('安装完成啦===='))

    open('http://localhost:8080')
    await spawn('npm',['run','serve'],{cwd:`./${name}`})
}



