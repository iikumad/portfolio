const mongoose = require('mongoose')

const Schema = mongoose.Schema

const experienceSchema = new Schema({
    date : {
        type: Number,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Experience',experienceSchema)