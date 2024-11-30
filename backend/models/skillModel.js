const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skillSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    icon : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Skill',skillSchema)