const cors = require('cors');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const { application } = require('./credentials.json');
const { validator } = require('../util/Validator');
const { logger } = require('../util/Logger');

const { UserController } = require('../controller/UserController');

let PORT = 'port';

class Server {

    constructor (applicationServer, applicationSettings) {
        logger.info('Initializing server ...')
        this.applicationServer = applicationServer;
        this.applicationSettings = application;
        this.applicationServer.set(PORT, process.env.PORT || applicationSettings.port);
        this.applicationServer.use(cors());
        this.applicationServer.use(bodyParser.json());
        this.applicationServer.use(bodyParser.urlencoded({ extended: false }));
    }

    setControllers () {
        new UserController(this.applicationServer).createUser()
    }

    start () {
        logger.info('Starting server ')
        const applicationPort = this.applicationServer.get(PORT)

        http.createServer(this.applicationServer)
            .listen(applicationPort, function () {
                logger.info('Server running at : http://localhost:',applicationPort);
            })
    }

}

const applicationServer = express()
exports.server = new Server(applicationServer, application);