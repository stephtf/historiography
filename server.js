const express = require('express'); 
const sequelize = require('./config/connection');
const path = require('path');

// connect server to the controllers/routes folder
const routes = require('./controllers/');
const apiRoutes = require('./controllers/api')

// connect to express-handlebars 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express(); 

// import in the models 
const User = require('./models/User');
const Book = require('./models/Book');

// start the server 
const PORT = process.env.PORT || 3001;

// required middleware
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set handlebars as the default template engine: see unit 14 activity 3
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// all the routes that come out of the controllers/api folder will have the prefix of 'api'
app.use('/', routes);
app.use('/api', apiRoutes);

sequelize.sync({ force : false }).then(() => {
    app.listen(PORT, () => {
        console.log(`relax! take a deep breath. everything is working over at port ${PORT}`);
    });
});



