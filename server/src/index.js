import App from './App'

var http = require('http').createServer()
var io = require('socket.io')(http)

io.on('connection', socket => new App(socket))

http.listen(3000, function () {
    console.log('listening on *:3000')
})