const mongoose = require('mongoose')

const loadListSchema = new mongoose.Schema({
    carModel: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    pickUpDate: {
        type: Date,
        required: true,
    },
    dropOffDate: {
        type: Date,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('loadList', loadListSchema, 'loads')