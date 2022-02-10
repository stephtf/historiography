const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); 

class Book extends Model {} 

Book.init({
    field: {
        type: DataTypes.STRING, 
    },
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    argument: {
        type: DataTypes.STRING,
    },
    examples: {
        type: DataTypes.STRING,
    },
    keywords: {
        type: DataTypes.STRING,
    },
    methods: {
        type: DataTypes.STRING,
    },
    significance: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize, 
    timestamps: true,
    underscored: true, 
    freezeTableName: true, 
    modelName: 'book',  
}
); 

module.exports = Book;