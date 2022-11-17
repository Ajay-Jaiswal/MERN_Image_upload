const express = require("express")
const bodyParser = require('body-parser')
const route = require('./router')
const  mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const axios = require('axios')
const port = 5000 || process.env.PORT

const dotenv = require('dotenv')
 dotenv.config()
 app.use(express.json());
app.use(cors())

const multer = require('multer')
const { AppConfig } = require('aws-sdk');


app.use(multer().any())

let MONGODB_URL = process.env.MONGODB_URL


mongoose.connect(MONGODB_URL, {
    useNewUrlParser : true
})

.then(()=>"MongoDBb is connected")
.catch(err=> console.log(err))

app.use('/', route)

app.listen(process.env.PORT || port, function () {
    console.log("Express is running on port " +(process.env.Port || port))
})