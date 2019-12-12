var fs = require('fs')
var path = require('path')
var CUR_DIR = path.resolve(__dirname)+'/'

function scanDir(dirPath) {

    let list = {}
    let dirList = fs.readdirSync(dirPath)

    dirList.forEach(filename => {
        if(filename === 'index.js') return
        let filePath = path.resolve(dirPath, filename)
        if(fs.lstatSync(filePath).isDirectory())
            list[filename] = scanDir(filePath)
        else
            list[filename] = filePath
    })

    return list

}

function importFiles(fileList) {
    let exportList = {}
    for(var name in fileList) {
        if(typeof fileList[name] === 'object')
            exportList[name] = importFiles(fileList[name])
        else {
            let file = path.parse(name)
            if(file.ext === '.js') exportList[file.name] = require(fileList[name])
        }
            
    }
    return exportList
}

export default importFiles(scanDir(CUR_DIR))