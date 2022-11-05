const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
    }
})

const Model = new mongoose.model('staff', createSchema)

module.exports = Model