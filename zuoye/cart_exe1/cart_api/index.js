const express = require('express')
const app = express();
app.use(require('body-parser').urlencoded({extended:true}))

// 配置 mysql
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'cart'
});
db.connect();
app.get('/api/v1/swipe',(req,res)=>{
   db.query('SELECT * FROM cart_swipe',(error,data)=>{
      if(error){
         res.json({
            "ok":0,
            "error":error
         })
      }else{
         res.json({
            "ok":1,
            "data":data
         })
      }
   })
   // res.json({
   //    "ok":0
   // })
})

app.listen(9999, () => {
   console.log('成功！监听：127.0.0.1:9999!')
})
