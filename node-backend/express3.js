const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname,'public');

// http://localhost:5000/about.html
// http://localhost:5000/Home.html
app.use(express.static(publicPath));

app.listen(5000);