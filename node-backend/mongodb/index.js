// connect mongodb with node

/* const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const database = "e-comm";
const client = new MongoClient(url); */


// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray()
//     console.log(response);
// }

// getData();


/* async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
} */


// using promises .then

/* dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
}) */


// using async await

/* const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main(); */


// access db connections from another file
const dbConnect = require("./mongodb");

const main = async() => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();

 /* dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})  */