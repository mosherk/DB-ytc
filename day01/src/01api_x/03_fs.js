// const fs = require('fs')
//异步读取
// fs.readFile

// //同步读取
// const data = fs.readFileSync('./conf.js')
// //通过modemon 读取出来，结果是一串buffer
// console.log('data',data)
// //字符串读取
// console.log('data',data.toString())

//异步读取
// fs.readFile('./conf.js',(err,data) =>{
//     //错误优先的回调
//     if(err) throw err;
//     console.log(data.toString())
// })
//不需要回调了，尽量promise api async/await

(async() =>{
    const fs = require('fs')
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./conf.js')
    console.log(data.toString())
})()



