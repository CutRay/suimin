const express = require('express')
const router = express.Router()
const db = require('../../../models/')
const User = db.User
const Sleep = db.Sleep

// ユーザー一覧 GET
router.get('/', async function(req, res) {
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 100
  const users = await User.findAll({
    offset,
    limit
  })
  res.json({
    users
  })
})

// 新規ユーザー登録 POST
router.post('/', async function(req, res) {
  const twitterId = req.body.twitterId
  const isWaking = true
  const idealTime = req.body.idealTime
  const user = User.build({ twitterId, isWaking, idealTime })
  await user
    .save()
    .then(() => {
      res.json({
        message: 'success'
      })
    })
    .catch(() => {
      res.json({
        message: 'failed'
      })
    })
})

// ユーザー詳細 GET
router.get('/:id', async function(req, res) {
  const id = Number(req.params.id)
  const user = await User.findAll({
    where: {
      id
    }
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

// ユーザースリープ一覧表示 GET
router.get('/:id/sleeps', async function(req, res) {
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 100
  const userId = Number(req.params.id)
  const sleeps = await Sleep.findAll({
    offset,
    limit,
    where: {
      userId
    }
  })
  res.json({
    sleeps
  })
})

// 新規ユーザースリープ登録 POST
router.post('/:id/sleeps', async function(req, res) {
  const startTime = req.body.startTime
  const endTime = req.body.endTime
  const userId = req.params.id
  const idealTime = req.body.idealTime
  const sleep = Sleep.build({
    startTime,
    endTime,
    userId,
    idealTime
  })
  await sleep
    .save()
    .then(() => {
      res.json({
        message: 'success'
      })
    })
    .catch(() => {
      res.json({
        message: 'failed'
      })
    })
})

// ユーザースリープ詳細 GET
router.get('/:id/sleeps/:sid', async function(req, res) {
  const userId = req.params.id
  const id = req.params.sid
  const sleep = await Sleep.findAll({
    where: {
      userId,
      id
    }
  })
  res.json({
    sleep
  })
})

// ユーザースリープ編集 PUT
router.put('/:id/actives/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

// ユーザースリープ DELETE
router.delete('/:id/actives/:sid', function(req, res) {
  let Userid = req.params.id
  res.json({
    message: 'This is user/active api' + Userid
  })
})

//routerをモジュールとして扱う準備
module.exports = router
