const Book = require('../models/Book');
const app = require('express').Router(); 


// localhost:3001 (login)
app.get('/', (req, res) => {
	// res.send('Hello this the route to login page!');
	try {
		res.render('login');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// localhost:3001/signup (sign up new user)
app.get('/signup', (req, res) => {
	// res.send('Hello this the route for the page where a new uesr can sign up!');
	try {
		res.render('signup');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// localhost:3001/home (home page or dashboard when user is logged in)
app.get('/home', async (req, res) => {
	try {
		const bookData = await Book.findAll({
			where: { user_id: req.session.user_id }
		});

		if (bookData[0] !== undefined){

		const books = bookData.map((book) => book.get({plain:true}));

		const firstBook = bookData[0].get({plain:true}); 

		const uniqueField = [...new Set(books.map(data => data.field))]
		// console.log(uniqueField);
	
		res.render('home', { 
			books,
			firstBook,
			uniqueField,
			loggedIn: req.session.loggedIn,
			userIn: req.session.username,
			user_id: req.session.user_id,
		})}
		else { 
		// const books = 'there are no booknotes in the database';
		// const firstBook = 'user needs to enter their first booknote';
		const newMessage = 'enter your first booknote!';

		res.render('home', { 
			// books,
			// firstBook,
			newMessage,
			loggedIn: req.session.loggedIn,
			userIn: req.session.username,
			user_id: req.session.user_id,
		})}
		
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// app.get('/home', async (req, res) => {
// 	try {
// 		const bookData = await Book.findAll({
// 			where: { user_id: req.session.user_id }
// 		});
// 		const books = bookData.map((book) => book.get({plain:true}));

// 		const firstBook = bookData[0].get({plain:true}); 

// 		res.render('home', { 
// 			books,
// 			firstBook,
// 			loggedIn: req.session.loggedIn,
// 			userIn: req.session.username,
// 			user_id: req.session.user_id,
// 		});
// 		} catch (err) {
// 		res.status(500).json(err);              
// 		}
// 	});


// localhost:3001/add (add new books)
app.get('/add', (req, res) => {
	// res.send('Hello this the route for the page where we add new books!');
	try {
		res.render('add');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// localhost:3001/add (add new books)
app.get('/test', (req, res) => {
	try {
		res.render('test');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});


	
// localhost:3001/about (about page, which is linked on the login page)
app.get('/about', (req, res) => {
	try {		
		res.render('about', {
			loggedIn: req.session.loggedIn,
		})
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

module.exports = app;