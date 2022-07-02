const { UserDao } = require('../dao/UserDao');
const { validator } = require('../util/Validator');
const { Response } = require('../util/Response');

class UserService {

    async createUser (req, res, next) {
        const requestBody = req.body
        if (validator.checkIfObjectNull(requestBody)) {
            return Response.badRequest(res)
        }

        try {
            const result = await UserDao.create(requestBody);
            if (validator.isNotNull(result)) {
                return Response.created(res)
            }
        } catch (error) {
            return Response.customSequelizeResponse(res, error.name, 'username')
        }

        return Response.badRequest(res)
    }

    async loginUser (req, res, next) {
        const requestBody = req.body
        if (validator.checkIfObjectNull(requestBody)) {
            return Response.badRequest(res)
        }

        try {
            const result = await UserDao.create(requestBody);
            if (validator.isNotNull(result)) {
                return Response.created(res)
            }
        } catch (error) {
            return Response.customSequelizeResponse(res, error.name, 'username')
        }

        return Response.badRequest(res)
    }

}

exports.UserService = new UserService();