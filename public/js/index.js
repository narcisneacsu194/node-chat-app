var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'randomUser2@example.com',
    text: 'Random text from user.'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server.');
});

socket.on('newMessage', function(message){
  console.log('New message', message);
});
