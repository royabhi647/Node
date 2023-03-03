const express = require('express');
require('./config') // db connection
const Product = require('./product')  // model,schema

const app = express();    // for make app executable
app.use(express.json());  // convert postman body data into json otherwise we will get undefined

// post api with mongoose
app.post("/create",async(req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
});

app.listen(5000);