require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()
const port = 9000

//Application level middleware
app.use(cors())
app.use(express.json()) // body-parser for parsing requests with application/json header

//Defining routes
router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})