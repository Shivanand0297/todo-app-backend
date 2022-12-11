const express = require("express")
const { register } = require("../controllers/User Controllers/register")

// importing user controllers

// using Router
const router = express.Router()

router.post("/", register)

module.exports = router