'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        title: "Nasa Type Rocket Store",
        version: "Dev"
    })
});

module.exports = router;