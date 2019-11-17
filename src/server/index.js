var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=>{
  console.log('A user has connected');
  socket.on('chat message', (message)=>{
    console.log('Server received message: ', message)
    io.emit('chat message', message);
  })
})

http.listen(3004, ()=>{
    console.log('Server listening on port 3004')
});