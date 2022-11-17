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
        name : "Vivek",
        age : 10,
    },
    {
        id : 3,
        name : "Kumar",
        age : 50,
    },
];

const useRouter = express.Router();
const authRouter = express.Router();
app.use("/user",useRouter);
app.use("/auth",authRouter);

useRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

useRouter.route("/:name").get(getUserById);


authRouter.route("/signup").get(getSignup).post(postSignup);


function getUser(req,res) {
    console.log(req.query);
    let{name,age} = req.query;
    res.send(user);
}

function postUser(req,res) {
    console.log(req.body.name);
    //then i can put this in db
    user.push(req.body);
    res.json({
        message : "Data received successfully",
        user : req.body,
    })
}

function updateUser(req,res) {
    console.log(req.body);
    let dataToBeupdated = req.body;
    for(key in dataToBeupdated){
        user[key] = dataToBeupdated[key];
    }
    res.json({
        message : "Data updated successfully",
    })
}

function deleteUser(req,res) {
    user = {};
    res.json({
        msg : "User has been deleted",
    })
}

function getUserById(req,res) {
    console.log(req.params.name);
    res.json({msg : "user id is ", obj : req.params})
}

function getSignup(req,res) {
    res.sendFile("/public/index.html", {root : __dirname});
}

function postSignup(req,res) {
    let {email, name, password} = req.body;
    console.log(req.body);
    res.json({
        msg : "user signed up",
        email,
        name,
        password,
    })
}


app.listen(5000);