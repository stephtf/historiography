const express = require('express'); 
const sequelize = require('./config/connection');

const app = express(); 

// import in the models 
const User = require('./models/User');
const Book = require('./models/Book');

// start the server 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force : true }).then(() => {
    app.listen(PORT, () => {
        console.log(`relax! everything is working over at port ${PORT}`);
    });
});



