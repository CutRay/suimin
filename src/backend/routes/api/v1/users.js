const express = require('express')
const router = express.Router()
const db = require('../../../models/')
const User = db.User
const Sleep = db.Sleep

// ユーザー一覧 GET
router.get('/', async function(req, res) {
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 100
  await User.findAll({
    offset,
    limit
  })
    .then(users => {
      res.json({
        users
      })
    })
    .catch(() => {
      res.json({
        message: 'error'
      })
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
  await User.findByPk(id)
    .then(user => {
      res.json({
        user
      })
    })
    .catch(() => {
      res.json({
        message: 'error'
      })
    })
})

// ユーザーデータ編集 PUT
router.put('/:id', async function(req, res) {
  const id = Number(req.params.id)
  const twitterId = req.body.twitterId
  const isWaking = req.body.isWaking
  const idealTime = req.body.idealTime
  User.update(
    {
      twitterId,
      isWaking,
      idealTime
    },
    {
      where: {
        id
      }
    }
  )
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

// ユーザー削除 DELETE
router.delete('/:id', function(req, res) {
  const id = Number(req.params.id)
  User.destroy({
    where: {
      id
    }
  })
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

// ユーザースリープ一覧表示 GET
router.get('/:id/sleeps', async function(req, res) {
  const offset = Number(req.query.offset) || 0
  const limit = Number(req.query.limit) || 100
  const userId = Number(req.params.id)
  await Sleep.findAll({
    offset,
    limit,
    where: {
      userId
    }
  })
    .then(sleeps => {
      res.json({
        sleeps
      })
    })
    .catch(() => {
      res.json({
        message: 'error'
      })
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
