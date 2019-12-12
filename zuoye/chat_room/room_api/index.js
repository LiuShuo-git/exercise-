const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function (req, res) {
   res.json({
      "ok": 1
   })
})
server.listen(8080, function () {
   console.log('127.0.0.1');

});
// 当有一个新的客户端连接时调用
io.on('connection', function (socket) {
   let room = socket.handshake.query.room
   // console.log(room);
   socket.join(room)
   socket.in(room).emit('notify', "Welcome"+room+'直播间')

   socket.in(room).emit()
   // socket.on('disconnect', function () {
   //    console.log("user disconnected");
   //    io.emit('notify', '有新的用户链接到服务器')

   // })
   // socket.on('success', data => {
   //    console.log('收到新的消息' + data);
   //    // 给所有人发消息（不包括自己）
   //    socket.broadcast.emit('notify',data+Math.random())

   // })




});