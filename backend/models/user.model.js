const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    //Field for model
    username: {

        //Validation for field
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    //Create fields for when it was created/modified
    timestamps : true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;