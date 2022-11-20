const express = require('express');
const app = express();
const userModel = require('./models/userModel');
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

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
    .get(getUsers)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)


useRouter.route("/setcookies").get(setCookies);
useRouter.route("/getcookies").get(getCookies);
useRouter.route("/:name").get(getUserById);


authRouter.route("/signup").get(getSignup).post(postSignup);


async function getUsers(req,res) {
    console.log(req.query);
    let{name,age} = req.query;

    // get all users from db
    let allUsers = await userModel.findOne({name:"Abhishek"})

    res.json({msg:"users retrieved",allUsers});
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

async function updateUser(req,res) {
    console.log(req.body);
    let dataToBeupdated = req.body;
    // for(key in dataToBeupdated){
    //     user[key] = dataToBeupdated[key];
    // }
    let doc = await userModel.findOneAndUpdate({email: "kumar@gmail.com"},dataToBeupdated);
    res.json({
        message : "Data updated successfully",
    })
}

async function deleteUser(req,res) {
    // user = {};
    let doc = await userModel.deleteOne({email:"krishna@gmail.com"})
    console.log(doc);
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

async function postSignup(req,res) {
    // let {email, name, password} = req.body;
    try{
        let data = req.body;
        let user = await userModel.create(data);
        console.log(data);
        res.json({
            msg : "user signed up",
        user
        })
    }catch(err){
        res.json({
            err:err.message
        })
    }
}


function setCookies(req,res) {
    res.cookie('isLoggedIn',false,{maxAge: 10000, secure:true})
    res.cookie('password',12345678,{secure:true})
    res.send('cookie has been set')
}

function getCookies(req,res) {
    let cookies = req.cookies.password;
    console.log(cookies);
    res.send('cookies received')
}

app.listen(5000);

// (async function createUser(){
//     let user = {
//         name: "Krishna",
//         email: "krishna@gmail.com",
//         password: "123456789",
//         confirmPassword: "123456789"
//     };
//     let data = await userModel.create(user);
//     console.log(data);
// })();