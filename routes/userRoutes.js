const express = require("express")
const { login } = require("../controllers/User Controllers/login")
const { logout } = require("../controllers/User Controllers/logout")
const { register } = require("../controllers/User Controllers/register")

// importing user controllers

// using Router
const userRoutes = express.Router()

userRoutes.post("/api/register", register)
userRoutes.post("/api/login", login)
userRoutes.get("/api/logout",logout)

module.exports = userRoutes