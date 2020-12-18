const express = require('express')
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'))
server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  // socket.on('news', (data) => {
  //   console.log(data);
  //   socket.emit('news2', { msg: 'hi,client' })
  // })

  setTimeout(() => {
    socket.emit('toClient', { msg: 'hi,client!' })
  }, 5000)
});