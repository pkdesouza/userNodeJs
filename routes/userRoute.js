const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.show);

module.exports = router;
