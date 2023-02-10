// create server in node

const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello this is abhishek</h1>");
    res.end();
}).listen(4500);


// pass function as parameter in node

const http = require('http');

function dataControl(req,res){
    res.write("<h1>Hello Node</h1>");
    res.end();
}

http.createServer(dataControl).listen(4500);

