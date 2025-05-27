require ('dotenv').config()

const express = require('express')
const connectToDB = require('./database/db.js')

const app = express()
const port = process.env.PORT || 5000
// connect to db
connectToDB(process.env.MONGO_URI)

app.use(express.json())
app.listen(port,()=>{
    console.log(`Server listen on port ${port}`);
    
})