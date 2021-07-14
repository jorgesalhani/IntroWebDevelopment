'use strict'

const express = require('express');
const repo = require('../src/repositories/store-repository')

const app = express();
const router = express.Router();

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/store-route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/store', productRoute);

module.exports = app;