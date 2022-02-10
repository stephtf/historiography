const express = require('express'); 
const sequelize = require('./config/connection');

// connect server to the routes 
const routes = require('./controllers');

const app = express(); 

// import in the models 
const User = require('./models/User');
const Book = require('./models/Book');

// start the server 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes); 

sequelize.sync({ force : true }).then(() => {
    app.listen(PORT, () => {
        console.log(`relax! everything is working over at port ${PORT}`);
    });
});



