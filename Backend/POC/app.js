const express = require("express");
const app = express();
// console.log(__dirname);

app.get("/",function(req,res) {
    res.send("<h1>Hello world,123</h1>")
})

app.get("/about",function(req,res) {
    res.sendFile('./views/about.html',{root:__dirname});
})

//redirect
app.get('/aboutus',(req,res) => {
    res.redirect('/about')
})

//404 page
app.use((req,res) => {
    res.status(404).sendFile("./views/404.html", {root:__dirname});
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});