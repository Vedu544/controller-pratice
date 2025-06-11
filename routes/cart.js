const express = require('express');
const { addProduct, getCart } = require('../controllers/cartController');
const router = express.Router();



router.get('/addToCart/:id', addProduct)

router.get('/getCart/:id', getCart)

module.exports = router;
