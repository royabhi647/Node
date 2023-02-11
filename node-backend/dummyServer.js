/* const http = require('http');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({name:'Anil sidhu',email:'anil@test.com'}))
res.end();
}).listen(5000); */


const data = require('./data')

const http = require('http');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data))
res.end();
}).listen(5000);