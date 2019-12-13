import routes from './routes'

const http = require('http').createServer()
const io = require('socket.io')(http)

io.on('connection', socket => {
    
    //setup routes
    routes.systemInfo(socket)
    routes.apache(socket)

})

http.listen(3000, () => {
    console.log('listening on port 3000')
})