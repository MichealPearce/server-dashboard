import routes from './routes'

export default class App {

    socket = null

    constructor(socket) {

        this.socket = socket
        console.log('connection made')
        this.setupRoutes()

    }

    setupRoutes() {
        let {socket} = this
        let {getDynamicData} = routes.system

        getDynamicData(socket)
    }

}