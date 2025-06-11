const express = require('express');
const router = express.Router();
const { getUser, newUser, getUserById } = require('../controllers/userController.js');


router.get('/getUser', getUser)

router.post('/addUser', newUser)

router.get('/:id', getUserById)

module.exports = router;
