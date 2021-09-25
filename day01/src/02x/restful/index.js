//读到一个模型就把增删改查的方法建立出来
// /api/user CET
// /api/user/1 GET
// /api/user POST PUT DELETE

const Koa = require('koa')
const app = new Koa()

//注册路由
const config = require('./conf.js')
const {loadModel} = require('./framework/loader.js')
loadModel(config)(app)


//一般思路转一圈


const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful = require('./framwork/router')
app.use(restful)



app.listen(3000,() =>{
    console.log('Server at 3000')
})

