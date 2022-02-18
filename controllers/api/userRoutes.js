const app = require('express').Router(); 
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const Book = require('../../models/Book');

// get route to check user info in the database 
// localhost:3001/api/users
app.get('/', async (req, res) => {
	// res.json('Hello this the route for user DATA');
	await User.findAll().then((userData) => {
		res.json(userData);
	});
	});


// post route to add new users to the database 
// localhost: 3001/api/users
app.post('/', async (req, res) => {
	try {
	  const newUser = req.body;
	  newUser.password = await bcrypt.hash(req.body.password, 10);
	  const userData = await User.create(newUser);

	  req.session.save(() => {
		req.session.userId = userData.id;
		req.session.loggedIn = true;
		console.log(req.session);
	  	res.status(200).json(userData);
		});
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


// post route to check if user exists, then log them in
// localhost:3001/api/users/login
app.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({ where: { username: req.body.username } }); 

		console.log(userData);

		if(!userData) {
			res 
				.status(400)
				.json({ message: 'incorrect username'});
			return;
		}

		const passwordGood = await userData.checkPassword(req.body.password); 

		console.log(`what is ${passwordGood}`);

		if(!passwordGood) {
			res	
				.status(400)
				.json({ message: 'incorrect password' });
			return;
		}

		if(userData && passwordGood) {
			console.log('am i in there?');
			req.session.save(() => {
				req.session.userId = userData.id;
				req.session.loggedIn = true; 
				res.json({ user: userData });
			})	
		}
	}
	catch (err) {
		console.log(err);
		res.json({ message: "login unsuccessful"});
	}
});	

// post route to log users out
// localhost:3001/api/users/logout
app.post('/logout', (req, res) => {
	// when the user logs out, destroy the session
	if (req.session.loggedIn) {
	  req.session.destroy(() => {
		res.status(204).end();
	  });
	} else {
	  res.status(404).end();
	}
  });

module.exports = app;