const fs = require('fs')
const path = require('path')
const mongoose = require(mongoose)

//加载器 文件
//扫描-加载-回调
//按需加载内容，不是确定的
/**
 * 
 * @param {*} dir 文件
 * @param {*} cb 
 */
function load(dir ,cb){
    const url = path.resolve(__dirname,dir)
    const files = fs.readdirSync(url)
    files.forEach(filename =>{
        filename = filename.replace('.js','')
        const file = fs.require(url+'/' + filename)
        cb(filename,file)
    })
}
const loadModel = config => app =>{
    mongoose.connect(config.dbk.url,config.db.options)
    const conn = mongoose.connection
    conn.on('error', () => console.error('数据库连接失败'))
    app.$model = {}
    load('../model',(filename,{schema}) =>{
        console.log('load model:' + filename,schema)
        app.$model[filename] = mongoose.model(filename,schema)
    })
}


module.exports ={
    loadModel
}






