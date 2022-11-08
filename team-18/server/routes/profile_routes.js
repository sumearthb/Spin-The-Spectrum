const express = require('express')
const router = express.Router()
const prControllers = require("../controllers/pr_controllers")


// File containing all routes regarding
// profile data adjustment (CRUD) commands

router.post('/createProfile', prControllers.createPr)

router.get("/retrieveProfile", prControllers.retrievePr)

router.delete("/deleteProfile", prControllers.deletePr)

router.put("/updateProfile", prControllers.updatePr)

module.exports = router;