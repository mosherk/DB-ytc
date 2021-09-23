const http = require('http')
const fs = require('fs')
http.createServer((requset,response) =>{
    console.log('a request',getPrototyChain(response))//访问网页后返回
    //TODO 流 request response


    response.end('HI, Node')//网页中显示
    //best or nothing

    // response = "hahahah"
    // response.body = "heiheihei"
}).listen(3001, () =>{
    console.log('Server at 3001')
})

function getPrototyChain(obj){
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj)
    }
    return protoChain
}
