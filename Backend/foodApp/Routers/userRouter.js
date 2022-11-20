const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/userModel");

userRouter
  .route("/")
  .get(getUsers, middleware1)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/setcookies").get(setCookies);
userRouter.route("/getcookies").get(getCookies);
userRouter.route("/:name").get(getUserById);

function middleware1(req, res, next) {
  console.log("midleware 1 called");
  next();
}

async function getUsers(req, res) {
  console.log(req.query);
  let { name, age } = req.query;

  // get all users from db
  let allUsers = await userModel.findOne({ name: "Abhishek" });

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
