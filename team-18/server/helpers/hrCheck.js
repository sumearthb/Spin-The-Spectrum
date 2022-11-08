const HeartRate = require('../models/student_hr')
const baseline = 70; 

//Function that checks if a student's heart rate exceeds a maximum or minimum threshold for a period of time. 
const hrCheck = async (list, id) => {
    for(i = list.length-1; i>0; i--){
        if(list[i] < baseline * 1.1 && list[i] > baseline * 0.9){
            return false
        }
    }
    return true
}

module.exports = {hrCheck};