const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    //Fields for model
    username: {type: String, required: true},
    description:{type: String, required: true},
    duration:{type: Number, required: true},
    date:{type: Date, required: true},
}, {
    //Create fields for when it was created/modified
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;