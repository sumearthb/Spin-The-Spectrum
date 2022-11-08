const Profile = require('../models/profile')

// Create the initial profile
const createPr = async(req, res) => {
    try {
        const profile = await Profile.create({ Student_ID: 1, First_Name: "Samarth", Last_Name: "Bhat",
    Noise_Sens: "low", Touch_Sens: "low", Vision_Sens: "low", Smell_Sens: "low", Taste_Sens: "low", 
    Fav_Songs: new Array("goosebumps"), Fav_Activity: "Tennis"})
        res.status(200).json(profile)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// Access a record attributed with a specific id
const retrievePr = async(req, res) => {
    req.query.id = parseInt(req.query.id)
    try{
        const result = await Profile.findOne({Student_ID: req.query.id}).exec(); 
        res.json(result); 
    }
    catch(err){
        res.send(err); 
    }
  
}

// Delete functionality for removing profile of 
// student from database in the scenario where
// the student leaves the school
const deletePr = async(req, res) => {
    const reqs = {id: 1}; 
    try{
        const result = await Profile.deleteOne({Student_ID:reqs.id}).exec()
        res.json(result); 
    }catch(err){
        res.send(err); 
    }
}

// Update functionality to change specific attribute 
// fields within the profile in case of any changes 
// in preferences or sensitivities
const updatePr = async(req, res) => {
    const reqs = {ValuetoBeUpdated: "Taste_Sens", newValue: "Medium", id: 1}

    // Depending on attribute, the profile 
    // is changed accordingly
    try {
        switch(reqs.ValuetoBeUpdated){
            case "First_Name":
                first = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {First_Name: first})
                break
            case "Last_Name":
                last = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Last_Name: last})
                break
            case "Middle_Initial":
                middle = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Middle_Initial: middle})
                break
            case "Noise_Sens":
                noise = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Noise_Sens: noise})
                break
            case "Touch_Sens":
                touch = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Touch_Sens: touch})
                break
            case "Vision_Sens":
                vision = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Vision_Sens: vision})
                break
            case "Smell_Sens":
                smell = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {smell: touch})
                break
            case "Taste_Sens":
                taste = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Taste_Sens: taste})
                break
            case "Fav_Songs":
                favsongs = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Fav_Songs: favsongs})
                break
            case "Fav_Activity":
                favactivity = reqs.newValue
                await Profile.updateOne({id:reqs.id}, {Fav_Activity: favactivity})
                break
            default:
                break
        }
        res.status(200)
        res.json(reqs)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {createPr, retrievePr, deletePr, updatePr}