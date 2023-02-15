const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send(`
    <h1>Welcome, to home page</h1><a href="/about" >Go to about page</a>
    `);
})

app.get("/about",(req,res)=>{
    // http://localhost:5000/about?name=Abhishek
    res.send(`
    <input type="text" placeHolder="User name" value="${req.query.name}" /> 
    <button>Click me</button>
    <a href="/">Go to Home page</a>
    `)
})

app.get("/help",(req,res)=>{
    res.send([
        {
            name:'anil',
            email:'anil@test.com'
        },
        {
            name:'sam',
            email:'sam@test.com'
        }
    ])
})


app.listen(5000);