const app = require('./app');
const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello, this is Jay");
    res.end();
}).listen(4500)


const fs = require('fs');
const { create } = require('domain');
console.log("Jay");
var a = 10, b=20 , c=30;
console.warn(a+b+c);

console.log(app.x, " ", app.y);
fs.writeFileSync('hello.txt',"this file created with fs");
