
const express = require('express')
const app = express()
const db = require('./mysql/db')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// 获取轮播图
app.get('/api/v1/swipe', (req, res) => {

   db.query('SELECT * FROM cart_swipe', (error, result) => {
      if (error) {
         res.json({
            ok: 0,
            error: error
         })

      } else {
         res.json({
            ok: 1,
            data: result
         })

      }
   })
})

// 获取分类
app.get('/api/v1/classify', (req, res) => {

   db.query('SELECT * FROM classify', (error, result) => {
      if (error) {
         res.json({
            ok: 0,
            error: error
         })

      } else {
         res.json({
            ok: 1,
            data: result
         })

      }
   })
})

// 获取商品
app.get('/api/v1/goods', (req, res) => {

   db.query('SELECT * FROM shop_goods', (error, result) => {
      if (error) {
         res.json({
            ok: 0,
            error: error
         })

      } else {
         res.json({
            ok: 1,
            data: result
         })

      }
   })
})

// 添加购物车
app.post('/api/v1/cart', (req, res) => {
   console.log(req.body);
   let goodsId = req.body.goods_id;
   let userId = req.body.user_id;
   // console.log(goodsId, userId);



   db.query('SELECT * FROM cart WHERE goods_id =? AND user_id = ?', [goodsId, userId], (error, result) => {
      if (error) {
         res.json({
            ok: 0,
            error: error
         })
      } else {
         // console.log(result.length);
         if (result.length == 0) {
            let cartList = {
               count: 1,
               ischk: 0,
               user_id: userId,
               goods_id: goodsId
            }
            // 添加新的购物车
            db.query('INSERT INTO  cart SET ?', cartList, (error, result) => {
               if (error) {
                  res.json({
                     ok: 0,
                     error: error
                  })
               } else {
                  res.json({
                     ok: 1
                  })
               }
            })
         } else {
            let id = result[0].id
            let cartList = {
               count: Number(result[0].count) + 1
            }
            console.log(id, cartList);

            // res.json({
            //    data:result
            // })

            db.query('UPDATE cart SET ? WHERE id = ?', [cartList, id], (error, result) => {
               if (error) {
                  res.json({
                     ok: 0,
                     error: error
                  })
               } else {
                  res.json({
                     'ok': 1
                  })
               }
            })
         }

      }

   })


})

// 获取购物车商品
app.get('/api/v1/cart', (req, res) => {
   let id = req.query.id
   console.log(id);


   db.query('SELECT * FROM cart WHERE user_id = ?', id, (error, result1) => {
      if (error) {
         res.json({
            ok: 0,
            error: error
         })

      } else {
         if (result1.length == 0) {
            return false
         } else {

            let ids = []
            result1.forEach(v => {
               console.log(v.goods_id);
               ids.push(v.goods_id)
            })
            console.log(ids);
            db.query(`SELECT * FROM shop_goods WHERE id in (${ids.toString()})`, (error, result2) => {
               if (error) {
                  res.json({
                     "ok": 0,
                     "error": error
                  })
               } else {

                  result1.forEach((v, k) => {
                     Object.assign(result1[k], result2[k]);


                  })
                  res.json({
                     data: result1
                  })
               }
            })


         }

      }
   })
})
app.listen(9999, () => console.log('Example app listening on port 9999!'))







