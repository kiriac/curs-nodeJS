'use strict'

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address');

router.get('/address', addressController.getAddress);
router.get('/address/:id', addressController.getOneAddress);
router.post('/address', addressController.saveAddress);

module.exports = router;
