// bringing all the env variables
require("dotenv").config()

// bringing express
const express = require("express")

// initializing cors for enabling cross server access
const cors = require("cors")   

// connecting with the database before starting the database
require("./config/dbConnect").dbConnect()

// bringing routes
const todoRoutes = require("./routes/todoRoutes")

const corsOptions = {
    origin: "http://localhost:3000"
}

const app = express()

// middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use("/", todoRoutes)

module.exports = app


/**
 * require("dotenv").config()
const express = require("express")
const cors = require("cors")
require("./config/dbConnect").connectToDb()
const userRoutes = require("./routes/userRoutes")

const corsOptions ={
    origin:'http://localhost:3000'
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", userRoutes)

module.exports = app
 */