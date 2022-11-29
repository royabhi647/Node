const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());


const userRouter = require("./Routers/userRouter");
const planRouter = require("./Routers/planRouter");
const reviewRouter = require("./Routers/reviewRouter");
const bookingRouter = require('./Routers/bookingRouter');

app.use("/user",userRouter);
app.use("/plan",planRouter);
app.use("/review",reviewRouter);
app.use("/booking",bookingRouter);


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