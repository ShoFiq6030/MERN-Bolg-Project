const express = require('express')
const router = require('./src/route/api')
const app= express()
const bodyParser= require('body-parser')
const mongoose  = require('mongoose');
require('dotenv').config();
const path = require('path');



//Security Midduleware
const helmet=require('helmet')
const rateLimit=require('express-rate-limit')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp = require('hpp')
const cors=require('cors');


//Security Midduleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// BodyParser 
app.use(bodyParser.json())

//Rate Limiter 
const limiter = rateLimit({windowMs:15*60*100,max:3000})

// Database
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Managing BackEnd API Routing
app.use("/api/v1",router)

// FrontEnd Tagging
// app.use(express.static('client/dist'))
// app.get("*",function(req,res){
//     res.sendFile(__dirname,'client','build','index.html')
// })


module.exports=app