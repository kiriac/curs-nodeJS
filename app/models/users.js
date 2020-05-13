const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    createdAt: Number,
    updatedAt: Number, 
    email: {
        type: String,
        required: [true, 'email field is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'name field is required'],
        unique: true      
    }, 
    activities: {
        type: Array
    }
})

module.exports = mongoose.model('user', userSchema, 'users');
