const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET /Fetching all products");
    res.send("Here is the list of products!");
});

router.post('/', (req, res) => {
    console.log("POST /adding a new product");
    console.log(req.body);
    res.send("product has been added!");
});

router.get('/:id', (req, res) => {
    console.log("GET /Fetching product by id");
    res.send("Here is the list of product by id!");
});


module.exports = router;