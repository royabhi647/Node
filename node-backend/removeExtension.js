// remove extension from URL
const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname,'public')

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/noPage.html`)
})


app.listen(5000);