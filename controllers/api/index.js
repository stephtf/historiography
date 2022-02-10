const app = require('express').Router(); 
const userRoutes = require('../api/userRoutes');
const bookRoutes = require('../api/bookRoutes');

// the url is localhost:3001/api/users or books
app.use('/users', userRoutes);
app.use('/books', bookRoutes); 

module.exports = app; 






