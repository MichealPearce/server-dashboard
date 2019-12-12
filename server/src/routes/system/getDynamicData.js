var si = require('systeminformation')
const EMIT_ACTION = 'system'

function getDynamicData(socket) {
    socket.on(EMIT_ACTION, (target, params, func) => {
        console.log('fetching:', target)
        if(target === 'time') return func(si.time())
        if(target && typeof si[target] === 'function') {
            si[target](params).then(data => {
                func(data)
            })
        } else {
            si.getDynamicData(data => socket.emit(EMIT_ACTION, data))
        }
    })
}

module.exports = getDynamicData