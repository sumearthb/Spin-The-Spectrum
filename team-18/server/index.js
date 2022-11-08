const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
const hrRoutes = require('./routes/heart_rate_routes')
const prRoutes = require('./routes/profile_routes')
require('dotenv').config()

app.use(hrRoutes)
app.use(prRoutes)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}).catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Important Data For Frontend')
})





