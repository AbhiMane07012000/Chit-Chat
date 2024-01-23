require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require('./routes/usersRoute')

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/auth',usersRoute);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Sucessful");
}).catch((err)=>{
    console.log(err.message);
})


app.listen(process.env.PORT,()=>{
    console.log('Server is running on ' + process.env.PORT);
})
