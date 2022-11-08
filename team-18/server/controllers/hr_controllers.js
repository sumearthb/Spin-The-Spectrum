
const HeartRate = require('../models/student_hr')


//Controller Function that creates a document that monitors a student's Heart Rate

const createHr = async (req, res) => {
    //const {Student_ID, } = req.body
    try {
        const heartrate = await HeartRate.create({Student_ID: 1, First_Name: "Samarth", Last_Name: "Bhat",
    Heart_Rate: new Array(), Date_Of_Creation:Date.now()})
        res.status(200).json(heartrate)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
} 

//Controller Function that updates the student's current heart rate, runs once every 5 seconds 
const updateHr = async (req, res) => {
    const reqs = {id: 1}; 
    
    try {
        const doc = await HeartRate.findOne({Student_ID: reqs.id})
        
        if(doc.Heart_Rate.length == 6){
            doc.Heart_Rate.shift()
        }
        
        const heartRate = Math.floor(Math.random() * (91-69) + 69)
        doc.Heart_Rate.push(heartRate)
        if((Date().now - doc.Date_Of_Creation) < 300000){
            const newbase = doc.BaseLine + heartRate
            await HeartRate.updateOne({id: reqs.id}, {baseline:newbase}).exec()
        }
        else if(Date.now - doc.Date_Of_Creation - 5000 < 300000){
            fbaseline = doc.BaseLine/60; 
            await HeartRate.updateOne({id: reqs.id}, {baseline:fbaseline}).exec()
        }

        await HeartRate.updateOne({id:reqs.id}, {Heart_Rate:doc.Heart_Rate}).exec()
        res.status(200)
        res.json(doc)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


//Deletes The Student's Heart Rate document when the student leaves for the day
const deleteHr = async (req, res) => {
    try{
        await HeartRate.deleteOne({Student_ID: 1}).exec()
        res.end()
    }
    catch(error){
        res.send(error)
    }
}


//Retrieves Student's Heartrate data based on ID Parameter supplied by query string 
const retrieveHR = async(req, res) => {
    // {id} = req.body
    req.query.id = parseInt(req.query.id);
    try{
        let result = await HeartRate.findOne({Student_ID:req.query.id}).exec();
        console.log(result)
        res.json({hr: result.Heart_Rate}) 
    }
    catch(err){
        console.log(err)
        res.status(400).end(); 
    }
}

module.exports = {createHr, updateHr, deleteHr, retrieveHR}




