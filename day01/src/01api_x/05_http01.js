const http = require('http')
const fs = require('fs')
http.createServer((request,response) =>{
    const {url,method} = request
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html',(err,data) => {
            if(err){
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 服务器挂了')
                return
            }
            response.statusCode = 200 
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }
    else if(url ==='/users' && method ==='GET'){
        
    }
    
    else{
        response.statusCode = 404
        response.setHeader('Content-type','text/plain;charset=utf-8')
        response.end('404 检查一下吧')
    }
}).listen(8080);
console.log('http://127.0.0.1:8080')