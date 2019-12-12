var fs = require('fs')
var path = require('path')
var debug = require('debug')('server-status:vhosts-list')
var _ = require('underscore')

const SITES_AVAILABLE_PATH = '/etc/apache2/sites-available/'
const SITES_ENABLED_PATH = '/etc/apache2/sites-enabled/'

function scanHostFiles(m = 'enabled') {
    let hostFiles = []
    let folder = (m === 'enabled') ? SITES_ENABLED_PATH : SITES_AVAILABLE_PATH
    let hostFilenames = fs.readdirSync(folder)
    hostFilenames.forEach(filename => {
        hostFiles.push(fs.readFileSync(`${folder}${filename}`, 'utf8'))
    })
    return parseHostFiles(hostFiles)
}

function parseHostFiles(files) {
    let hostFiles = []
    files.forEach(text => {
        let data = {}
        let m, regex = /(?:\t+)([^<]\S+)\s(.+)/g
        do {
            m = regex.exec(text)
            if(m) data[m[1]] = m[2]
        } while(m)
        if(data.ServerName) hostFiles.push(data)
    })
    return _.uniq(hostFiles, hf => hf.ServerName)
}

function ListHosts(socket, data) {
    debug('listing virtual hosts')
    socket.emit('vhosts/list', scanHostFiles())
}

module.exports = {
    action: 'vhosts/list',
    payload: ListHosts
}