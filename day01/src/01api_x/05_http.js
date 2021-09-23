const http = require('http')
const fs = require('fs')
http.createServer((request,response) =>{
    //接00，TODO 流 request response
    const {url,method,headers} = request
    // console.log("url:"+url)
    // console.log(__filename)
    if(url === '/' && method === 'GET'){
        //index.html
        fs.readFile('index.html',(err,data) => {
            if(err){
                response.writeHead(500, {
                    //为了返回中文提示
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 服务器出错了啊喂')
                return
            }
            response.statusCode = 200 
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }
    else if(url ==='/users' && method ==='GET'){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify({name:'梁马晖'}))
    }
    
    else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        //直接readFile读取 把全部图片内容加载到服务器
        //stream流，url/1.jpg
        fs.createReadStream('.' + url).pipe(response)
    }

    else{
        response.statusCode = 404
        response.setHeader('Content-type','text/html;charset=utf-8')
        // response.setHeader('Content-type','text/plain;charset=utf-8')
        response.end('<p>404 出错了</p>')
        //返回一个错误页面如何搞
    }
}).listen(3001, () =>{
    console.log('Server at 3001')
})