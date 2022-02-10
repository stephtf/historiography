const app = require('express').Router(); 
// const bcrypt = require('bcrypt');
const User = require('../../models/User');

// the url is localhost:3001/api/users
// get route to check user info in the database 
app.get('/', (req, res) => {
	// res.json('Hello this the route for user DATA');
	User.findAll().then((userData) => {
		res.json(userData);
	});
	});








// the url is localhost: 3001/api/users
// post route to add new users to the database 



module.exports = app;