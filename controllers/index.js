const app = require('express').Router(); 

// the url for this is localhost:3001 (login)
app.get('/', (req, res) => {
	// res.send('Hello this the route to login page!');
	try {
		res.render('login');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// the url is localhost:3001/signup (sign up new user)
app.get('/signup', (req, res) => {
	// res.send('Hello this the route for the page where a new uesr can sign up!');
	try {
		res.render('signup');
	  } catch (err) {
		res.status(500).json(err);              
	  }
	});

// the url is localhost:3001/home (home page or dashboard when user is logged in)
app.get('/home', (req, res) => {
	res.send('Hello this the route for the user after signing in!');
	});

// the url is localhost:3001/add (add new books)
app.get('/add', (req, res) => {
	res.send('Hello this the route for the page where we add new books!');
	});
	
// the url is localhost:3001/about (about page, which is linked on the login page)
app.get('/about', (req, res) => {
	res.send('Hello this the about page for the website!');
	});

module.exports = app;