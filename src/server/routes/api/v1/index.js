var express = require('express')
var router = express.Router()

router.use('/user', require('./user.js'))

module.exports = router
