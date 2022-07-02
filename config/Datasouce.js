const { Sequelize } = require('sequelize');
const { logger } = require('../util/Logger');
const { database } = require('./credentials.json')


class Datasource {

    constructor (datasource = null) {
        this.datasource = new Sequelize(
            database.name,
            database.username,
            database.password,
            { host: database.host, dialect: database.dialect, logging: msg => logger.debug(msg) }
        );
    }

    async isConnected () {
        try {
            const authenticate = await this.datasource.authenticate();
            return true
        } catch (error) {
            return false
        }
    }

    async syncModel () {
        try {
            await this.datasource.sync({ alter: true });
        } catch (error) {
            return error
        }
    }

    getDatasource () {
        return this.datasource
    }

}

const datasource = new Datasource();
// try {
//     datasource.syncModel()
//     console.log('success')
// } catch (error) {
//     console.log(error)
// }
exports.datasource = datasource.getDatasource();