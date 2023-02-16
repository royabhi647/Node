// remove extension from URL
const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

// template -> build dynamic page in node using ejs template package, ejs supports views folder
app.get('/profile',(_,res)=>{
    let user = {
        name:'Abhishek Kumar',
        email:'abhishek@test.com',
        city:"Arrah",
        skills:['php','java','c++','node','javascript']
    }
    res.render('profile',{user});
})

app.get('/login',(_,res)=>{
    res.render('login');
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})



app.listen(5000);