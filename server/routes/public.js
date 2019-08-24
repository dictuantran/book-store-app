var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth');
var users = require('../controllers/users');
var validate = require('express-validation');
var authValidation = require('../validations/auth');

router.route('/auth/login').post(validate(authValidation.loginParam), auth.login);
router.route('/users').get(users.getUsers);

module.exports = router;