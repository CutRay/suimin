let express = require('express')
let router = express.Router()

router.use('/users', require('./users.js'))

module.exports = router
