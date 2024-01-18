require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Sucessful");
}).catch((err)=>{
    console.log(err.message);
})


const server = app.listen(process.env.PORT,()=>{
    console.log('Server is running on ' + process.env.PORT);
})