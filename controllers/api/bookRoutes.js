const app = require('express').Router(); 
const Book = require('../../models/Book');

// the url is localhost:3001/api/books
// get route to grab books from the database 
app.get('/', async (req, res) => {
	// res.json('Hello this the route for book DATA');
	await Book.findAll().then((bookData) => {
		res.json(bookData);
	});
});

// the url is localhost: 3001/api/books
// post route to add books to the database 
app.post('/', (req, res) => {
	Book.create({
		field: req.body.field,
		title: req.body.title,
		author: req.body.author,
		argument: req.body.argument,
		examples: req.body.examples,
		keywords: req.body.keywords,
		methods: req.body.methods,
		significance: req.body.significance,
		user_id: req.body.user_id
	}) .then((newBook) => {
		res.json(newBook);
	});
});

module.exports = app;