const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// save data in mongodb
const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "m10",
    price: 1000,
    brand: "max 10",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();


// update data in mongodb
const updateInDB = async () => {
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name:"m0"},
        {$set: {price:750,name:"m13"}}
    )
    console.log(data);
}

// updateInDB();


// Delete data from mongodb

const deleteInDB =async () => {
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.deleteOne({name:"m8"});
    console.log(data);
}

// deleteInDB();

// read all data from mongodb
const findInDB =async () => {
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.find();   // read all data
    // let data = await Product.find({name:"m8"})  // search
    console.log(data);
}

findInDB();