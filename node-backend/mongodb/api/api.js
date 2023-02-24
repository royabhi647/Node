// get api with mongoDB

const express = require('express');
const dbConnect = require('../mongodb');
const mongodb = require('mongodb') // object for delete
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})


// post api in mongoDB | insert data
app.post('/', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    res.send(result)
})


// put api in mongoDB | update data
app.put('/', async(req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    res.send({result:"updated"})
})



// Delete api | Delete api from MongoDB
app.delete('/:id', async (req,res)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})


app.listen(5000)