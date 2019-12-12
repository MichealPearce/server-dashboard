var si = require('systeminformation')
const EMIT_ACTION = 'system/static'

function getStaticData(socket) {
    socket.on(EMIT_ACTION, target => {
        si.getStaticData()
        .then(data => {
            if(target && !data[target]) socket.emit(EMIT_ACTION, false)
            if(target && data[target]) socket.emit(EMIT_ACTION, data[target])
            socket.emit(EMIT_ACTION, data)
        })
    })
}

module.exports = getStaticData