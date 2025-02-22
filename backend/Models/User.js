const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('users', UserSchema); // conection with db's collection 
module.exports = UserModel;
