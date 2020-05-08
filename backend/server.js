const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


//Lets you use Environment variables in .env file
require('dotenv').config();


//Creates express server
const app = express();
const port = process.env.PORT || 5000;

//Cors Middle Ware
app.use(cors());

//Parse JSON from sending and recieving 
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

//Import
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Express adds the routes to address (Loads all exercise/users)
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


//Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});