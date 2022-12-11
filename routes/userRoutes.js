const express = require("express")
const { login } = require("../controllers/User Controllers/login")
const { register } = require("../controllers/User Controllers/register")

// importing user controllers

// using Router
const userRoutes = express.Router()

userRoutes.post("/api/register", register)
userRoutes.post("/api/login", login)

module.exports = userRoutes