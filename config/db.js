const mongoose = require('mongoose');
const config = require('./keys');
const db = config.mongoURI;

const connectDB = async () => {
    try {
        console.log('trying to conect to DB');
        await mongoose.connect(db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log('connection failed');
        process.exit(1);
    }
}


module.exports = connectDB;