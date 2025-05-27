const mongoose = require('mongoose')

const connectToDB = async(url)=>{
    try {
        await mongoose.connect(url)
        console.log('MongoDB is connected');
        
    } catch (error) {
        console.error('Mongo DB connection failed ', error)
        process.exit(1)
    }
}

module.exports = connectToDB