const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());


const useRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");


app.use("/user",useRouter);
app.use("/auth",authRouter);


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