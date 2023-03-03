const express = require("express");
require("./config"); // db connection
const Product = require("./product"); // model,schema

const app = express(); // for make app executable
app.use(express.json()); // convert postman body data into json otherwise we will get undefined


// post api with mongoose
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});


// get api with mongoose
app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});


//delete api with mongoose
app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});


// put api | update data
app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(
        req.params,
        { 
            $set: req.body 
        }
    );
  resp.send(data);
});


// search data
app.get("/search/:key",async(req,resp)=>{
    console.log(req.params.key);
    let data = await Product.find(
        {
            $or:[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})


app.listen(5000);
