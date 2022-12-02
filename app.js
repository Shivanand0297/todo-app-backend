// bringing all the env variables
require("dotenv").config()

// connecting with the database before starting the database
require("./config/dbConnect").dbConnect()

// initializing cors for enabling cross server access
const cors = require("cors")     

// bringing routes
const corsOptions = {
    origin: "http://localhost:3000"
}
const express = require("express")
const app = express()

const todoRoutes = require("./routes/todoRoutes")

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

// routes
app.use("/", todoRoutes)

module.exports = app
