const express = require('express')
const app = express();
app.use(require('body-parser').urlencoded({ extended: true }))
let bodyparser = require('body-parser')
app.use(bodyparser.json())
// 配置cors
const cors = require('cors')
app.use(cors())
// 配置bodyparser

// 配置 mysql
var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'cart'
});
db.connect();
// 获取轮播图
app.get('/api/v1/swipe', (req, res) => {
   db.query('SELECT * FROM cart_swipe', (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         res.json({
            "ok": 1,
            "data": data
         })
      }
   })
})

// 获取分类
// 获取轮播图
app.get('/api/v1/classify', (req, res) => {
   db.query('SELECT * FROM classify', (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         res.json({
            "ok": 1,
            "data": data
         })
      }
   })
})
// 获取商品
app.get('/api/v1/goods', (req, res) => {
   let pagenum = req.query.pagenum || 1
   let pagesize = req.query.pagesize || 2
   let offset = (pagenum - 1) * pagesize


   db.query(`SELECT * FROM shop_goods LIMIT ${offset},${pagesize}`, (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         res.json({
            "ok": 1,
            "data": data
         })
      }
   })
})

// 把商品添加到购物车
app.post('/api/v1/cart', (req, res) => {
   let cartList = req.body
   console.log(cartList);

   let sql2 = `SELECT * FROM cart WHERE goods_id =${req.body.goods_id} AND  user_id = ${req.body.user_id}`;
   db.query(sql2, (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         // 如果没数据 则插入新的数据
         if (data.length === 0) {
            let sql = `INSERT INTO cart SET ? `
            db.query(sql, cartList, (error, data) => {
               if (error) {
                  res.json({
                     "ok": 0,
                     "error": error
                  })
               } else {
                  res.json({
                     "ok": 1,
                     "data": data
                  })
               }
            })
         } else {
            // console.log(data[0].count);
            let count = data[0].count

            let sql3 = `UPDATE cart SET count=${count + 1} WHERE  goods_id = ${req.body.goods_id} AND user_id = ${req.body.user_id}`;
            db.query(sql3, (error, data) => {
               if (error) {
                  res.json({
                     "ok": 0,
                     "error": error
                  })
               } else {
                  res.json({
                     "ok": 1,
                     "data": data
                  })
               }
            })
         }

      }
   })






})
// 查询购物车信息
app.get('/api/v1/cart', (req, res) => {
   let id = req.query.id
   console.log(id);


   let sql = `SELECT * FROM cart WHERE user_id = ?`
   db.query(sql, id, (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         let ids = []
         data.forEach(v => {
            console.log(v.goods_id);
            ids.push(v.goods_id)
         })
         console.log(ids);
         let sql2 = `SELECT * FROM shop_goods WHERE id in(${ids.join(',')})`;
         db.query(sql2, (error, data2) => {
            if (error) {
               res.json({
                  "ok": 0,
                  "error": error
               })
            } else {
               console.log(data2);
               for (var i = 0; i < data.length; i++) {
               // 合并对象！
                  Object.assign(data[i],data2[i]);
               }
               console.log(data2);
               res.json({
                  "ok": 1,
                  "data": data
               })
            }
         })
      }
   })

})
// 根据id 修改状态
app.put('/api/v1/status', (req, res) => {
   let ischk = req.body.ischk
   let count = req.body.count
   let user_id = req.body.user_id
   let goods_id = req.body.goods_id
   console.log(user_id,goods_id,888);
   
   let sql = `UPDATE cart SET ischk=${ischk},count=${count} WHERE goods_id = ${goods_id} AND user_id=${user_id}`
   db.query(sql, (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         res.json({
            "ok": 1,
            "data": data
         })
      }
   })
})
// 根据id 删除购物车商品
app.delete('/api/v1/cart', (req, res) => {

   let id = req.query.id
   let user_id = req.query.user_id

   let sql = `DELETE FROM cart WHERE goods_id = ? AND user_id = ?`
   db.query(sql, [id,user_id], (error, data) => {
      if (error) {
         res.json({
            "ok": 0,
            "error": error
         })
      } else {
         res.json({
            "ok": 1,
            "data": '删除成功'
         })
      }
   })

})
app.listen(9999, () => {
   console.log('成功！监听：127.0.0.1:9999!')
})
