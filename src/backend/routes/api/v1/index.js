let express = require('express')
let router = express.Router()

router.use('/users', require('./user.js'))

module.exports = router
