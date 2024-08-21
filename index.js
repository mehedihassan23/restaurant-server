const express = require("express")
const app = express()
require('dotenv').config()
const cors = require("cors")
const mongoose = require('mongoose');
const router = require("./router/router");
const port = process.env.PORT

//Middlewire
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Database connection
mongoose.connect("mongodb+srv://mehedi2000:mehedi2002@exploredb.qjnhrwi.mongodb.net/restaurant?retryWrites=true&w=majority&appName=exploredb")
.then(()=> {
    console.log("Database is connected")
})
.catch((error)=> {
    console.log("Database is not connected")
    console.log(error.message)
    process.exit(true)
})

//router
app.use("/", router)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})