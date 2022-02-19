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
        type: DataTypes.TEXT,
    },
    examples: {
        type: DataTypes.TEXT,
    },
    keywords: {
        type: DataTypes.STRING,
    },
    methods: {
        type: DataTypes.TEXT,
    },
    significance: {
        type: DataTypes.TEXT,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
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