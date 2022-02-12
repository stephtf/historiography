const app = require('express').Router(); 
const bcrypt = require('bcrypt');
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
app.post('/', async (req, res) => {
	try {
	  const newUser = req.body;
	  newUser.password = await bcrypt.hash(req.body.password, 10);
	  const userData = await User.create(newUser);
	  res.status(200).json(userData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });

// THIS CODE ALSO WORKS: 
// app.post('/', (req, res) => {
// 	User.create({
// 		username: req.body.username,
// 		password: req.body.password
// 	}) .then((newUser) => {
// 		res.json(newUser);
// 	});
// });

// the url is localhost:3001/api/users/login
// post route to check if user exists, then log them in
app.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({ where: { username: req.body.username } }); 

		if(!userData) {
			res 
				.status(400)
				.json({ message: 'incorrect username or password'});
			return;
		}

		const passwordGood = await userData.checkPassword(req.body.password); 

		if(!passwordGood) {
			res	
				.status(400)
				.json({ message: 'password incorrect' });
			return;
		}

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true; 
			res.json({ user: userData });
		});		
	}
	catch (err) {
		res.json({ message: "hit catch on route login post"});
	}
});	
	

module.exports = app;