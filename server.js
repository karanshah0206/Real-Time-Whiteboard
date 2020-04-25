var express = require('express');
var app = express();
var server = app.listen(3000);
var socket = require('socket.io');
var io = socket(server);
app.use(express.static('public'));
io.sockets.on('connection', newConnetion);
function newConnetion(socket) {
    console.log("New Connection: " + socket.id);
    socket.on('mouse', mouseMessage);
    function mouseMessage(data) {
        socket.broadcast.emit('mouse', data);
    }
    socket.on('disconnect', () => {
        console.log(socket.id + " Disconnected");
    })
}