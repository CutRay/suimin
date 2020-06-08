const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const backPort = process.env.PORT || 8080

const router = require('./routes/api/v1/')
server.use('/api/v1/', router)

//サーバ起動
server.listen(backPort)
console.log('listen on server port ' + backPort)
