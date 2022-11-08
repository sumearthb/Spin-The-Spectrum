const express = require('express')


const router = express.Router()
const hrControllers = require("../controllers/hr_controllers")


//File that hosts all the routes that deal with a student's heart rate. 

router.get("/retrieveHR", hrControllers.retrieveHR); 


router.post('/createHR', hrControllers.createHr)

module.exports = router;

router.put('/updateHR', hrControllers.updateHr)

module.exports = router;

router.delete('/deleteHR', hrControllers.deleteHr)

module.exports = router;