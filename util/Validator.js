

class Validator {

    getCredential (credentials, key) {
        return credentials[key];
    }

    isNotNull (object) {
        if (object === null) {
            return false
        }
        return true
    }

    checkIfObjectNull (object) {
        if (object === null) {
            return true;
        }

        if (object === undefined) {
            return true
        }

        if (Array.isArray(object)) {
            return true
        }

        Object.keys(object).forEach(key => {
            const property = object[key]
            if (property === null) {
                return true
            }
        })
        return false
    }

}

exports.validator = new Validator();