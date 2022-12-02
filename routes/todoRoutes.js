const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodos");
const { home } = require("../controllers/home");
const router = express.Router();

router.get("/", home)
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)

module.exports = router