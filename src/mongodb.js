const MONGO_URL = "mongodb://localhost:27017/test";
const mongoose = require('mongoose');

mongoose.connect(MONGO_URL).then(()=>{
    console.log("Database Connected");
}).catch((err)=>console.log(err));
