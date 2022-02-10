const sequelize = require('../config/connection');
const User = require('../models/User');
const Book = require('../models/Book');

const userData = require('./userData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Book.bulkCreate(bookData);

  process.exit(0);
};

seedDatabase();