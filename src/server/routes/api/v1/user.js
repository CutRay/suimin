var express = require('express')
var router = express.Router()

// ユーザー一覧 GET
router.get('/', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// 新規ユーザー登録 POST
router.post('/', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// ユーザー詳細 GET
router.get('/:id', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// ユーザーデータ編集 PUT
router.put('/:id', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// ユーザー削除 DELETE
router.delete('/:id', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// ユーザーアクティブ一覧表示 GET
router.get('/:id/active', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// 新規ユーザーアクティブ登録 POST
router.post('/:id/active', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーアクティブ詳細 GET
router.get('/:id/active/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーアクティブ編集 PUT
router.put('/:id/active/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーアクティブ DELETE
router.delete('/:id/active/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーレスト一覧表示 GET
router.get('/:id/rest', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// 新規ユーザーレスト登録 POST
router.post('/:id/rest', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// ユーザーレスト詳細 GET
router.get('/:id/rest/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// ユーザーレスト編集 PUT
router.put('/:id/rest/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// ユーザーレスト DELETE
router.delete('/:id/rest/:sid', function(req, res) {
  var Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})
//routerをモジュールとして扱う準備
module.exports = router
