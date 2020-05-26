const express = require('express')
const router = express.Router()
const db = require('../../../models/')
const User = db.User
const Active = db.Active
const Rest = db.Rest
// ユーザー一覧 GET
router.get('/', async function(req, res) {
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 100
  const users = await User.findAll({ offset, limit })
  res.json({
    users
  })
})

// 新規ユーザー登録 POST
router.post('/', function(req, res) {
  res.json({
    message: 'This is user api'
  })
})

// ユーザー詳細 GET
router.get('/:id', async function(req, res) {
  const id = Number(req.params.id)
  const user = await User.findAll({
    where: {
      id
    },
    include: [{ model: Active }, { model: Rest }]
  })
  res.json({
    user
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
router.get('/:id/active', async function(req, res) {
  const userId = Number(req.params.id)
  const actives = await Active.findAll({
    where: {
      userId
    }
  })
  res.json({
    actives
  })
})

// 新規ユーザーアクティブ登録 POST
router.post('/:id/active', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーアクティブ詳細 GET
router.get('/:id/active/:sid', async function(req, res) {
  const userId = req.params.id
  const id = req.params.sid
  const active = await Active.findAll({
    where: {
      userId,
      id
    }
  })
  res.json({
    active
  })
})

// ユーザーアクティブ編集 PUT
router.put('/:id/active/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーアクティブ DELETE
router.delete('/:id/active/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザーレスト一覧表示 GET
router.get('/:id/rest', async function(req, res) {
  const userId = Number(req.params.id)
  const rests = await Rest.findAll({
    where: {
      userId
    }
  })
  res.json({
    rests
  })
})

// 新規ユーザーレスト登録 POST
router.post('/:id/rest', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// ユーザーレスト詳細 GET
router.get('/:id/rest/:sid', async function(req, res) {
  const userId = req.params.id
  const id = req.params.sid
  const rest = await Rest.findAll({
    where: {
      userId,
      id
    }
  })
  res.json({
    rest
  })
})

// ユーザーレスト編集 PUT
router.put('/:id/rest/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})

// ユーザーレスト DELETE
router.delete('/:id/rest/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/rest api' + Userid
  })
})
//routerをモジュールとして扱う準備
module.exports = router
