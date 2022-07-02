class BaseDao {

    constructor (model) {
        this.model = model;
    }

    async create (obj) {
        return await this.model.create(obj);
    }

    async update (update, condition) {
        return await this.model.update(update, condition);
    }

    async delete (condition) {
        return await this.model.destroy(condition);
    }

    async findByPk (pk) {
        return await this.model.findByPk(pk)
    }

    async find (condition) {
        return await this.model.findOne(condition)
    }

    async findAll (condition = null) {
        if (condition === null) {
            return await this.model.findAll();
        }
        return await this.model.findAll(condition);
    }

}

exports.BaseDao = BaseDao;