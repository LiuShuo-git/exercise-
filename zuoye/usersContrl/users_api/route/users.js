const express = require('express');
const router = express.Router();
const db = require('../db')
const apiName = 'users'


// 登录
router.post('/login',(req,res)=>{

   res.json({
      'token':'1445464564564564dasdasf@##@'
   })

   // window.sessionStorage.getItem('token',token)

   
})
// 查询用户
router.get(`/${apiName}`, (req, res) => {



   // let page = req.query.page || 1;
   // let per_page = req.query.per_page || 1;
   let name = req.query.name || '';
   // 第几页
   let page = req.query.page || 1
   // 每页显示多少条
   let per_page = req.query.per_page || 5
   let id = req.query.id || '';
   let where = '';
   let data = []
     // 翻页
     let offset = (page-1)*per_page
     let limit = ` LIMIT ${offset},${per_page}`
   if (name) {
      where = 'WHERE nick_name LIKE ?'
      data[0] = `%${name}%`
   }
   if (id) {
      where = 'WHERE  id = ?'
      data[0] = `${id}`
   }
   // console.log(data[0]);
   

   // console.log(data);

   let sql = `select * from user ${where} ${limit}`;

   db.query(sql, data, (err, results, fields) => {
      // console.log(results);
      res.json({
         'data': results
      })
   })

})



// 添加用户
router.post(`/${apiName}`, (req, res) => {
   console.log(req.body);


   let nick_name = req.body.nick_name
   let gender = req.body.gender
   let sql = `INSERT INTO user SET ? `;
   let data = {
      nick_name,
      gender,
   };

   if (nick_name && gender) {
      db.query(sql, data, (error, results, fields) => {
         console.log(results);

         if (!results) {
            res.json({
               'code': 400,
               'error': '用户名已存在'
            })
         } else {
            res.json({
               "code": 200,
               "success": "添加成功！"
            })
         }
      })
   }

})

// 删除用户
router.delete(`/${apiName}/:id(\\d+)`, (req, res) => {

   let id = req.params.id
   console.log('kkk');


   //   res.json({
   //      "code":200
   //   })
   let sql = `DELETE from user WHERE id = ? `
   db.query(sql, id, (error, results, fields) => {
      console.log(results.affectedRows);

      if (results.affectedRows == 1) {
         res.json({
            "code": 200,

         })
      } else {
         res.json({
            "code": 400,
            "error": "删除失败,未找到id！"
         })

      }


   })

})

// 修改数据
router.put(`/${apiName}/:id`, (req, res) => {
   // res.json({
   //    "code":200
   // })
   let id = req.params.id;
   let nick_name = req.body.nick_name;
   let gender = req.body.gender
   let data = {}
   if (nick_name) {
      if (nick_name.length < 2 || nick_name.length > 8) {
         res.json({
            "code": 400,
            "error": '用户名必须2-8位'
         })
         return
      }
      data.nick_name = nick_name
   };
   if (gender) {
      data.gender = gender
   };
   let sql = ' UPDATE user SET ? WHERE id =?'
   db.query(sql, [data, id], (error, results, fields) => {
      if (error) {
         res.json({
            code: '400',
            error: error
         })


      } else {
         res.json({
            'code': 200
         }

         )
      }

   })
})

module.exports = router