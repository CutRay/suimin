let express = require('express')
let router = express.Router()

router.use('/user', require('./user.js'))

module.exports = router
