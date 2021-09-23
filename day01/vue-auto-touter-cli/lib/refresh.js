//读文件


//拼代码 模板渲染的方式
const fs =require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () =>{
    //获取列表
    const list = fs.readdirSync('./src/views')
        .filter(v => v !=='Home.vue')
        .map(v =>({
            name: v.replace('.vue','').toLowerCase(),
            file:v,
        }));

        //字母顺序排列出来的
        //生成路由定义
        compile({list},'./src/router.js','./template/router.js.hbs')
        //生成菜单
        compile({list},'./src/App.vue','./template/App.vue.hbs')



        /**
         * 
         * @param {*} meta 定义数据
         * @param {*} filePath 目标文件
         * @param {*} templatePath 模板
         */
        function compile(meta,filePath,templatePath){
            if(fs.existsSync(templatePath)){
                const content = fs.readFileSync(templatePath).toString()
                const result = handlebars.compile(content)(meta)
                fs.writeFileSync(filePath,result)
                console.log(chalk.blue(`👌${filePath} 创建成功`))
            }
        }
}

//通过下一级的参数来启用不同的模板？
//list是按顺序渲染的，如何按想要的顺序渲染