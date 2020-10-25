var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    console.log('A user connected');
    socket.on('disconnect', () =>{
        console.log('A user disconnected');
    })

    socket.on('chat message', (msg) => {
        console.log('Message: ' + msg);
    })
})
const port = process.env.port || 3000;
http.listen(port, () => {
  console.log('listening on *:3000');
});
