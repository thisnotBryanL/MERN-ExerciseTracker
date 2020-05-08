const router = require('express').Router();

//Requries the mongoose model we created
let Exercise = require('../models/exercise.model');


//First API endpoint (route) that handles http GET requests from /exercise path
router.route('/').get((req, res) => {
    //Mongoose method that gives a list of all users in mongoDB
    //Results returned in JSON format
    Exercise.find()
        //Returns the exercise in JSON format
        .then(exercises => res.json(exercises))
        //Returns error 
        .catch(err => res.status(400).json('Error: ' + err));
});

//Second endpoint that handles POST requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    //Creates new isntance of user using the username
    const newExercise = new Exercise({ 
        username,
        description,
        duration,
        date,
     }); 

    //Saves the new user instance to database
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Finding the exercise by ID (Get Request)
router.route('/:id').get((req,res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Finding the exercise by ID then delete (Delete Request = Get + delete)
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update the exercise by ID
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
            .then(()=> res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Must export router
module.exports = router;