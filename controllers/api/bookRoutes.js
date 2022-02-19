const app = require('express').Router(); 
const Book = require('../../models/Book');

// get route to grab books from the database 
// localhost:3001/api/books
app.get('/home', async (req, res) => {
	try {
		const book = Book.findAll( { plain: true });
		res.render('home', {
			bookData: book,
		});
		console.log(book);
	} catch (err) {
		res.status(500).json(err); 
	}
});


// post route to add books to the database 
// localhost:3001/api/books
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
		console.log(newBook);
	});
});

module.exports = app;