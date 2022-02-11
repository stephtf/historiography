const app = require('express').Router(); 
// const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Book = require('../../models/Book');

// the url is localhost:3001/api/users
// get route to check user info in the database 
app.get('/', async (req, res) => {
	// res.json('Hello this the route for user DATA');
	await User.findAll().then((userData) => {
		res.json(userData);
	});
	});

// the url is localhost: 3001/api/users
// post route to add new users to the database 
app.post('/', (req, res) => {
	User.create({
		username: req.body.username,
		password: req.body.password
	}) .then((newUser) => {
		res.json(newUser);
	});
});


module.exports = app;