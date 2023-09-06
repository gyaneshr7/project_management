const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://Gyanesh:Gyan2002@cluster0.wxos33e.mongodb.net/project_mgmt?retryWrites=true&w=majority')
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB