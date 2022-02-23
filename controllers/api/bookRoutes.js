const app = require('express').Router(); 
const Book = require('../../models/Book');

// get route to grab books from the database 
// localhost:3001/api/books
app.get('/', async (req, res) => {
	await Book.findAll().then((bookData) => {
		res.json(bookData);
	});
});

// get route to grab one book from database
// localhost:3001/api/books/:id
app.get('/:id', async (req, res) => {
	try {
		const oneBook = await Book.findOne({ where: { id: req.params.id }});
		res.status(200).json(oneBook);
	} catch (err) {
		res.status(500).json(err);
	}
	});


// get route to grab all books of the same field
// localhost:3001/api/books/:field
app.get('/allbooks/:field',  (req, res) => {

		Book.findAll({ where: { field: req.params.field }})
		.then((bookData) => {
			res.json(bookData);
		  });
		});

	// app.get('/:field', async (req, res) => {
	// 	try {
	// 		const fieldBooks = await Book.findAll({ where: { field: req.params.field }});
	// 		res.status(200).json(fieldBooks);
	// 	} catch (err) {
	// 		res.status(500).json(err);
	// 	}
	// 	});

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

// put route to update book notes 
// localhost:3001/api/books/:id
app.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.update(
			{ 	field: req.body.field,
				title: req.body.title,
				author: req.body.author,
				argument: req.body.argument,
				examples: req.body.examples,
				keywords: req.body.keywords,
				methods: req.body.methods,
				significance: req.body.significance,
				user_id: req.body.user_id
			 }, 
			{ where: { id: req.params.id } });
        	res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// delete a book note by its id 
// localhost:3001/api/books/:_id
app.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.destroy({ where: {id: req.params.id }});
        res.status(200).json(deletedBook);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = app;