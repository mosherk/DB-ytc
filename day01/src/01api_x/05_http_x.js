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
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify({name:'梁马晖'}))
    }
    // else if(method === 'GET' && Headers.accept.indexOf('image/*')){
    //     //直接readFile读取
    //     //stream流，url/1.jpg
    //     fs.createReadStream('.' + url).pipe(response)
    // }

    else{
        response.statusCode = 404
        response.setHeader('Content-type','text/plain;charset=utf-8')
        response.end('404 检查一下吧')
    }
}).listen(3001, () =>{
    console.log('Server at 3001')
})