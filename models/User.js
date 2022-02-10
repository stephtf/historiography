const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); 

class User extends Model {} 

User.init({
    username: {
        type: DataTypes.STRING, 
    },
    password: {
        type: DataTypes.STRING,
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
