const app = require('express')();
const http = require('http').createServer(app);
// SOCKET 
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

users = [];

// SOCKET ON, NICKNAME
io.on('connection', function (socket) {
    socket.on('send-nickname', function (nickname) {
        nickname.on('chat message', function(msg) {
            msg.emit('chat message', 'llego el nickname');
        })
        
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});