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
io.on('connection', function (socket) {
   socket.on('disconnect', function () {
      console.log("user disconnected");
      socket.on('message',data=>{
         socket.broadcast.emit('notify',data)
      })

   })



});