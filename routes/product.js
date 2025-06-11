const express = require('express');
const router = express.Router();
const controller = require('../controllers/productControllers');


router.get('/getProducts', controller.getProduct)

router.post('/newProduct', controller.newProduct)

router.get('/:id', controller.getProductById)

module.exports = router;