(async () =>{
    const {MongoClient} = require('mongodb')

    //创建客户端
    const client = new MongoClient(
        'mongodb://localhost:27017',
        {
            useNewUrlParser:true
        }
    )

    let  ret = await client.connect()
    const db = client.db('test')

    //数据集
    const fruits = db.collection('fruits')
    //添加文档 
    ret = await fruits.insertOne({
        name:'芒果',
        price:3.5
    })
    console.log('insert' ,ret)



})()

//异步调用 完成以后 做什么
//js callback generator async/await eventEmitter 发布订阅



