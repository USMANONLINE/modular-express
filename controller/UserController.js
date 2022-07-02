const { application } = require('../config/credentials.json')
const { UserService } = require('../service/UserService');

class UserController {

    constructor (applicationServer, userService = null) {
        this.applicationServer = applicationServer
        this.userService = UserService
    }

    createUser (path = application.basePath + 'create-user') {
        this.applicationServer.post(path, this.userService.createUser);
    }

}

exports.UserController = UserController;