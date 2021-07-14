'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/store-controller');

router.get('/:id', controller.get)
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;