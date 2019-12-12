var {exec} = require('child_process')

function ListUsers(socket) {
    console.log('listing users')
    exec(
        "cut -d: -f1,3 /etc/passwd | egrep ':[0-9]{4}$' | cut -d: -f1",
        (err, stdout, stderr) => {
            socket.emit('users/list', stdout.split('\n').filter(n => n))
        }
    )
}

module.exports = {
    action: 'users/list',
    payload: ListUsers
}