var express = require('express');
var privateRouter = require('./private');
var publicRouter = require('./public');

var router = express.Router();

router.use('/', privateRouter);
router.use('/', publicRouter);

module.exports = router;