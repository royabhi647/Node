const express = require('express');
const app = express();
// http://localhost:5000/?name=Abhishek

app.get("",(req,res)=>{
    console.log("data sent by browser =>>> ",req.query.name);
    res.send("Welcome,"+req.query.name);
})

app.listen(5000);