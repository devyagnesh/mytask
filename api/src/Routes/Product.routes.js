const express = require('express');
const Route = express.Router();
const {AddProduct, Upload, getAllProducts} = require('../Controllers/Product.controller')


Route.post('/add',Upload.single('img'),AddProduct);
Route.get('/',getAllProducts);
module.exports = Route;