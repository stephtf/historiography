const app = require('express').Router(); 
const Book = require('../../models/Book');

// the url is localhost:3001/api/books
// get route to grab books from the database 
app.get('/', async (req, res) => {
	// res.json('Hello this the route for book DATA');
	const bookData = await Book.findAll();
	return res.json(bookData);
});






// the url is localhost: 3001/api/books
// post route to add books to the database 




module.exports = app;