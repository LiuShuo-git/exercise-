const express = require('express')
const app = express()
const config = require('./config')
var cors = require('cors');
// app.get('/', (req, res) => {
//    res.send('hello')
// })
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
   origin: ['http://localhost:8080'],  //指定接收的地址
   methods: ['GET', 'POST', 'DELETE','PUT'],  //指定接收的请求类型
   alloweHeaders: ['Content-Type', 'Authorization']  //指定header
}))

const usersRouter = require('./route/users');
app.use('/api/v1', usersRouter)
app.listen(`${config.server.prot}`, `${config.server.ip}`, function () {
   console.log('启动服务器');

})