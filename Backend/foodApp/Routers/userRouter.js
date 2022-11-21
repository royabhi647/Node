const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');
const JWT_KEY = 'khdlkhdsakfjlajvgldsj';

userRouter
  .route("/")
  .get(protectRoute, getUsers)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/setcookies").get(setCookies);
userRouter.route("/getcookies").get(getCookies);
userRouter.route("/:name").get(getUserById);

// let isLoggedIn = true;
//isadmin cookie can be used to identify b/w user and admin
function protectRoute(req, res, next) {
  if(req.cookies.login){
    let token = req.cookies.login;
    let isVerified = jwt.verify(token,JWT_KEY);
    if(isVerified)  next();
    else{
      req.json({
        msg:'user not verified'
      })
    }
  }else{
    return res.json({
      msg : 'operation not allowed'
    })
  }
} 

async function getUsers(req, res) {
  console.log(req.query);
  let { name, age } = req.query;

  // get all users from db
  let allUsers = await userModel.find();

  res.json({ msg: "users retrieved", allUsers });
}

function postUser(req, res) {
  console.log(req.body.name);
  //then i can put this in db
  user.push(req.body);
  res.json({
    message: "Data received successfully",
    user: req.body,
  });
}

async function updateUser(req, res) {
  console.log(req.body);
  let dataToBeupdated = req.body;
  // for(key in dataToBeupdated){
  //     user[key] = dataToBeupdated[key];
  // }
  let doc = await userModel.findOneAndUpdate(
    { email: "kumar@gmail.com" },
    dataToBeupdated
  );
  res.json({
    message: "Data updated successfully",
  });
}

async function deleteUser(req, res) {
  // user = {};
  let doc = await userModel.deleteOne({ email: "krishna@gmail.com" });
  console.log(doc);
  res.json({
    msg: "User has been deleted",
  });
}

function getUserById(req, res) {
  console.log(req.params.name);
  res.json({ msg: "user id is ", obj: req.params });
}

function setCookies(req, res) {
  res.cookie("isLoggedIn", false, { maxAge: 10000, secure: true });
  res.cookie("password", 12345678, { secure: true });
  res.send("cookie has been set");
}

function getCookies(req, res) {
  let cookies = req.cookies.password;
  console.log(cookies);
  res.send("cookies received");
}

module.exports = userRouter;
