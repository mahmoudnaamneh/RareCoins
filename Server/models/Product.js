const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    link: { type: String, required: true },
    quantity: { type: Number, required: true },
    minquantity: { type: Number, required: true },
    category: { type: String, required: true },
},
{collection:"products"});

module.exports = mongoose.model("products", productSchema);
