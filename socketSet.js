var socketio = require('socket.io');
var moment = require('moment');
moment.locale('ko');

var users = {};

var socketSet = function (server) {
    var io = socketio.listen(server);
    io.on('connection', function (socket) {

        socket.emit('welcome', {
            user: 'System',
            msg: 'Welcome!!!',
            time: moment().format('LLLL')
        });

        socket.on('join', function (data) {
            users[socket.id] = data;
        });

        socket.on('chat message', function (data) {
            console.log('data : ' + data);
            console.log('user: ' + data.user);
            console.log('message: ' + data.msg);
            data.time = moment().format('LLLL');
            io.emit('chat message', data);
        });

        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    });
}

module.exports = socketSet;