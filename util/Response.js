const responseBody = { datetime: new Date().toLocaleString() }

class Response {
    
    static created (response) {
        responseBody.message = 'Created'
        return response.json(responseBody).status(201)
    }

    static ok (response, message) {
        responseBody.message = 'Success'
        return response.json(responseBody).status(200)
    }

    static badRequest (response, message) {
        responseBody.message = 'Bad Request'
        return response.json(responseBody).status(400)
    }

    static unAuthorized (response, message) {
        responseBody.message = 'Unauthorized'
        return response.json(responseBody).status(401)
    }

    static customSequelizeResponse (response, err, attribute) {
        switch (err) {
            case 'SequelizeUniqueConstraintError': {
                responseBody.message = 'Entity with same ' + attribute + ' already exist'
                return response.json(responseBody).status(200)
            }
            default: {
                responseBody.message = 'Bad Request'
                return response.json(responseBody).status(400)
            }
        }
    }

}

exports.Response = Response;