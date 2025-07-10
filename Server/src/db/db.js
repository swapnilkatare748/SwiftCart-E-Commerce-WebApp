const mongoose = require('mongoose');
const connectDB = async() =>{
    try{
       await mongoose.connect(process.env.MONGO_DB);
       console.log('Database is connected ');
    }catch(error){
         console.log("Data bse connection error : ",error);
         process.exit(1);
    }
}
module.exports = connectDB;