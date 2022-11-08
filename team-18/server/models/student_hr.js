const mongoose = require('mongoose')

const Schema = mongoose.Schema

const heartRateSchema = new Schema({
    Student_ID: {
        type: Number,
        required: true
    },
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Middle_Initial: {
        type: String,
        required: false
    },
    Heart_Rate: {
        type: Array(Number),
        required: true
    },
    Date_Of_Creation: {
        type:Number, 
        required:true
    }, 
    BaseLine: {
        type: Number, 
        required: false, 
        default: 0
    }
})

module.exports = mongoose.model('HeartRate', heartRateSchema)