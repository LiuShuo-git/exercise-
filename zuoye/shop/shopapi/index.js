const express = require('express')
const app = express()

// 解决办法跨域
app.use(require('cors')())
// 配置body-parser 解决post传参
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// 引入md5
const md5 = require('md5')
const mi = 'sddas/*/-5456456!@../*'
// 引入jsonwebtoken
const jsonwebtoken = require('jsonwebtoken')
// 1 引入 mysql
const mysql = require('mysql')
// 2 创建一个新的连接对象
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fullstack34shop'
})
// 3 连接 mysql
db.connect()

/*          接口路由代码  **********/
// req：接收用户提交的参数
// res：给前端返回数据
app.get('/api/v1/main_ad_images', (req, res) => {
    let sql = 'SELECT image,link FROM shop_swipe_images'
    // 执行 SQL
    // err：如果出错，错误信息、
    // data：执行 SQL 之后的返回值
    db.query(sql, (err, data) => {
        if (err) {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 0,
                'error': err
            })
        } else {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 1,
                'data': data
            })
        }
    })
})

app.get('/api/v1/index_goods', (req, res) => {
    // console.log(req.query);

    let page = req.query.page || 1;
    let per_page = req.query.per_page || 2;
    let offset = (page - 1) * per_page;


    let sql = `SELECT * FROM shop_goods limit ${offset},${per_page}`

    // 执行 SQL
    // err：如果出错，错误信息、
    // data：执行 SQL 之后的返回值
    db.query(sql, (err, data) => {
        if (err) {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 0,
                'error': err
            })
        } else {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 1,
                'data': data
            })
        }
    })
})

app.get('/api/v1/index_categories', (req, res) => {
    let sql = 'SELECT * FROM shop_categories'
    // 执行 SQL
    // err：如果出错，错误信息、
    // data：执行 SQL 之后的返回值
    db.query(sql, (err, data) => {
        if (err) {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 0,
                'error': err
            })
        } else {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 1,
                'data': data
            })
        }
    })
})
// 查询商品
app.get('/api/v1/goods', (req, res) => {
    let id = req.query.id
    id = id.split(',')
    let wenhao = []
    id.forEach(v => {
        wenhao.push(v)
    })
    wenhao = wenhao.join(',')


    // 根据id 查询购物车商品
    let sql = `SELECT * FROM shop_goods WHERE id IN (${wenhao})`
    console.log(sql);
    // res.json({
    //     data:1
    // })
    db.query(sql, id, (err, data) => {
        if (err) {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 0,
                'error': err
            })
        } else {
            // 给前端返回 JSON 数据
            res.json({
                'ok': 1,
                'data': data
            })
        }
    })

})
// 注册接口
app.post('/api/v1/register', (req, res) => {
    let mobile = req.body.mobile;
    let password = req.body.password
    let regtime = Date.parse(new Date()).toString().substr(0, 10);

    let mobRef = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    let passRef = /^[\w_-]{6,16}$/

    if (!mobRef.test(mobile)) {
        res.json({
            "ok": 0,
            "error": "手机号码格式不正确"
        })
        return
    }

    if (!passRef.test(password)) {
        res.json({
            "ok": 0,
            "error": "密码必须是6-16位字母数字_-组成！"
        })
        return
    }

    let sql = `select count(*) m from shop_users where mobile = ?`

    // 查询手机号是否已经添加过
    db.query(sql, mobile, (err, data) => {
        if (err) {
            res.json({
                "ok": 0,
                "error": err
            })
        } else {
            // 如果不等于0 则代表手机号已经存在 ，不能再添加
            if (data[0].m !== 0) {
                res.json({
                    "ok": 0,
                    "error": "手机号码已存在！"
                })
                return
            } else {

                let sql2 = 'insert into shop_users set ?'
                let data = {
                    mobile,
                    password: md5(password + mi),
                    regtime: regtime
                }
                db.query(sql2, data, (err, data) => {
                    if (err) {
                        res.json({
                            "ok": 0,
                            "error": "手机号格式不正确"
                        })
                    } else {
                        res.json({
                            "ok": 1
                        })

                    }
                })
            }


        }
    })


})
// 启动服务器
// 登录接口
app.post('/api/v1/login', (req, res) => {
    let mobile = req.body.mobile;
    let password = req.body.password


    let mobRef = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    let passRef = /^[\w_-]{6,16}$/
    // 判断手机号
    if (!mobRef.test(mobile)) {
        res.json({
            "ok": 0,
            "error": "手机号码格式不正确"
        })
        return
    }
    // 判断密码
    if (!passRef.test(password)) {
        res.json({
            "ok": 0,
            "error": "密码必须是6-16位字母数字_-组成！"
        })
        return
    }
    // 判断手机号是否存在
    let sql = 'select * from shop_users where mobile =?'

    db.query(sql, mobile, (err, data) => {
        if (err) {
            res.json({
                "ok": 0,
                "error": err
            })

        } else {
            //   "data": []
            // res.json({
            //     'data': data
            // })
            if (data.length > 0) {
                // 判断密码
                if (data[0].password === md5(password + mi)) {
                    let jwt = jsonwebtoken.sign({
                        id: data[0].id
                    }, mi, { expiresIn: 60 * 60 * 24 * 30 * 6 }) //半年， 单位秒
                    res.json({
                        "ok": 1,
                        'data': {
                            "token": jwt
                        }
                    })
                    return
                } else {
                    res.json({
                        "ok": 0,
                        "error": "密码错误"
                    })
                }
            } else {
                res.json({
                    "ok": 0,
                    "error": "手机号不存在"
                })
            }
          
        }

    })

    // res.json({
    //     // "data":0
    // })
})
app.listen(9999, () => {
    console.log('成功！监听：127.0.0.1:9999!')
})