const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodos");
const router = express.Router();

router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)

module.exports = router