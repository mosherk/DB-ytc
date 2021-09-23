const fs = require('fs')
//1.png => fs read write 占用内存

const rs = fs.createReadStream('./1.png')
const ws = fs.createWriteStream('./2.png')
rs.pipe(ws)