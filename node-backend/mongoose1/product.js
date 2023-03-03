// schema defines and model connects node with schema

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

module.exports = mongoose.model('products',productSchema);