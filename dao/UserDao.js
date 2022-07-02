const { User } = require('../models/User')
const { BaseDao } = require('./BaseDao')

class UserDao extends BaseDao {

    constructor (model) {
        super(model)
    }

}

exports.UserDao = new UserDao(User);