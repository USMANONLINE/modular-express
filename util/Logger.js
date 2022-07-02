const bunyan = require('bunyan');
const { logSetting } = require('../config/credentials.json');

class Logger {

    constructor (log = null) {
        this.log = bunyan.createLogger(logSetting);
    }

    getLogger () {
        return this.log
    }

}

const applicationLogger = new Logger();
exports.logger = applicationLogger.getLogger()
