const express = require('express');
const router = express.Router();

router.get('/:userid', (req, res) => {
    console.log("GET /Fetching cart by user id");
    res.send("Here is the list of products which user added to cart!");
});

router.post('/:userid', (req, res) => {
    console.log("POST /adding a new product to cart with user ID");
    console.log(req.body);
    res.send("product has been added!");
});


module.exports = router;