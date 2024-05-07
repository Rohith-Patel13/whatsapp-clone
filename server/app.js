const express = require("express");
const mongoose = require('mongoose')
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors()); 
require("dotenv").config()
app.listen(8098,()=>{
    console.log(`server runs on given port number`)
    mongoose.connect(process.env.MONGODB_URI)
            .then(()=>console.log("Database connected"))
            .catch((err)=>console.log(err.message))
})
