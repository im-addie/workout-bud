require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router')
const { pathLogger } = require('./middleware/logger')

const app = express()
const port = 9000

//Application level middleware
app.use(cors()) 
app.use(express.json()) // body-parser for parsing requests with application/json header
app.use(pathLogger) // console logs the method and path

// Defining routes
router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})