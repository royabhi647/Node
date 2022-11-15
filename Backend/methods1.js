const express = require('express');
const app = express();
app.use(express.json());
let user = [
    {
        id : 1,
        name : "Abhishek",
        age : 100,
    },
    {
        id : 2,
        name :"priya",
        age : 10,
    },
    {
        id : 3,
        name : "Pandey",
        age : 50
    },
];

// with queries
app.get('/user',(req,res) => {
    console.log(req.query);
    let {name,age} = req.query;
    let filteredData = user.filter(useObj => {
        return (userObj.name==name && userObj.age==age)
    })
    res.send(filteredData);
})

// params
app.get('/user/:name',(req,res) => {
    console.log(req.params.name);
    //let {id}=req.params;
    // let user = db.findOne(id);
    res.json({ msg: "user id is ", "obj": req.params });
})






app.listen(5000);