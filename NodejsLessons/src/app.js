'use strict'

const express = require('express');

const app = express();
const router = express.Router();

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;