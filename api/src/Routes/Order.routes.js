const express = require('express');
const Route = express.Router();
const {addOrder} = require('../Controllers/Order.controller')


Route.post('/add',addOrder);
module.exports = Route;