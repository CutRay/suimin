var express = require('express')
var router = express.Router()

// GET  http://localhost:3000/api/v1/user/test
router.get('/', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})
router.get('/:id', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})
router.get('/:id/active', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})
router.get('/:id/rest', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})
//routerをモジュールとして扱う準備
module.exports = router
