const bcrypt = require('bcryptjs');
const { datasource } = require('../config/Datasouce');
const { DataTypes, Model } = require('sequelize');
const { application } = require('../config/credentials.json');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set (value) {
            const salt = bcrypt.genSaltSync(application.saltIteration);
            this.setDataValue('password', bcrypt.hashSync(value, salt));
        }
    }
}, { sequelize: datasource, modelName: 'User' });

exports.User = User;