const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Address = new Schema({
    street: {
        type: String,
        required: [true, 'Street type is required']
    },
    zipCode: Number,
    city: {
        type: String,
        required: [true, 'City is required']
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('address', Address, 'address');
