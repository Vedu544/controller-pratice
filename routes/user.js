const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET /Fetching all users");
    res.send("Here is the list of users!");
});

router.post('/', (req, res) => {
    console.log("POST /adding a new user");
    console.log(req.body);
    res.send("user has been added!");
});

router.get('/:id', (req, res) => {
    console.log("GET /Fetching all users by id");
    res.send("Here is the list of users by id!");
});


module.exports = router;