const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  // 端口, mysql 端口一般是3306
  port: 3306,
  // 数据库的名称
  database: 'users',
})

module.exports = connection