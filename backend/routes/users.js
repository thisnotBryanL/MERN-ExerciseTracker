const router = require('express').Router();

//Requries the mongoose model we created
let User = require('../models/user.model');


//First API endpoint (route) that handles http GET requests from /users path
router.route('/').get((req,res)=>{
    //Mongoose method that gives a list of all users in mongoDB
    //Results returned in JSON format
    User.find()
    //Returns the users in JSON format
    .then(users => res.json(users))
    //Returns error 
    .catch(err => res.status(400).json('Error: ' + err));
});

//Second endpoint that handles POST requests
router.route('/add').post((req,res) => {

    const username = req.body.username;

    //Creates new isntance of user using the username
    const newUser = new User({username});

    //Saves the new user instance to database
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Must export router
module.exports = router;