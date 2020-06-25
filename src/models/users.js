const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: String
})

module.exports = mongoose.model('seats', newSchema);