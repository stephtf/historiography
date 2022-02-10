const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); 

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
        validate: {
            len: [8],
        }
    },
}, {
    sequelize, 
    timestamps: true,
    underscored: true, 
    freezeTableName: true, 
    modelName: 'user',  
}
); 

module.exports = User;
