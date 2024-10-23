const express = require('express');
const app = express();
const PORT = 8000;

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/onlineShop";
mongoose.connect(mongoDB,{useNewUrlParser:true});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Routes
const productRoutes = require('./routes/products.route');
const userRoutes = require('./routes/users.route');

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(PORT,()=>{console.log("server started to listen to port ",PORT)});