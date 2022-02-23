const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); 

class Book extends Model {} 

Book.init({
    field: {
        type: DataTypes.TEXT, 
        // primaryKey: true, 
    },
    title: {
        type: DataTypes.TEXT,
    },
    author: {
        type: DataTypes.TEXT,
    },
    argument: {
        type: DataTypes.TEXT,
    },
    examples: {
        type: DataTypes.TEXT,
    },
    keywords: {
        type: DataTypes.TEXT,
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