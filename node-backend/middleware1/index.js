// group route middleware

const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get('/users', (req,res)=>{
    res.send("Welcome to Users Page")
})

// middleware
route.get('/about', (req,res)=>{
    res.send("Welcome to About Page")
})

// middleware
route.get('/contact', (req,res)=>{
    res.send("Welcome to Contact Page")
})


app.use('/',route);

app.listen(5000);