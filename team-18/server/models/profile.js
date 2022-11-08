const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating the attributes for each profile 
// that is entered into the MongoDB cluster
const profileSchema = new Schema({
    Student_ID:{
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
    // Attributes for specific core senses that 
    // may be especially sensitive or at risk
    Noise_Sens: {               
        type: String,
        required: true
    },
    Touch_Sens: {
        type: String,
        required: true
    },
    Vision_Sens: {
        type: String,
        required: true
    },
    Smell_Sens: {
        type: String,
        required: true
    },
    Taste_Sens: {
        type: String,
        required: true
    },
    // Storing songs and other things that may be 
    // potentially soothing for the student
    Fav_Songs: {
        type: Array(String),
        required: true
    },
    Fav_Activity: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Profile', profileSchema)