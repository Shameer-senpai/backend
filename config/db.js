const mongoose = require ("mongoose");
const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/atsbackend");
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;
