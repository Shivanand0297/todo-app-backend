// bringing all the env variables
require("dotenv").config()

// bringing express
const express = require("express")

// initializing cors for enabling cross server access
const cors = require("cors")

// connecting with the database before starting the database
require("./config/dbConnect").dbConnect()

// importing cookie parser
const cookieParser = require("cookie-parser")
// bringing routes
const todoRoutes = require("./routes/todoRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:4000/",
        credentials: true,
    })
);

// routes
app.use("/", todoRoutes)
app.use("/", userRoutes)

module.exports = app