import si from 'systeminformation'

export default function systemInfo(socket) {
    
    socket.on('system', (target, cb) => {
        switch(target) {
            case 'time':
                cb(si.time())
            break;
            default:
                if(typeof si[target] === 'function') si[target](cb)
                else cb(false)
            break;
        }
    })

}