const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get products by category
router.get('/product/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get five popular products (for simplicity, we'll just return the first 5 products)
router.get('/showPopular', async (req, res) => {
    try {
        const products = await Product.find().limit(5);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product
router.post('/addProduct', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a product
router.put('/updateProduct/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        Object.assign(product, req.body);
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
