const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on.',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'randomName@example.com',
    text: 'Random text.',
    createdAt: 234
  });  

  socket.on('disconnect', () => {
    console.log('User disconnected.');
  });

  socket.on('createMessage', (message) => {
    console.log('New message received from user', message);
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
})
