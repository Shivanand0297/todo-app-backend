const express = require("express");
const { createTask } = require("../controllers/createTask");
const { createTodo } = require("../controllers/createTodo");
const { editTodo } = require("../controllers/editTodo");
const { getTodos } = require("../controllers/getTodos");
const { home } = require("../controllers/home");
const router = express.Router();

router.get("/", home)
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)
router.post("/createTask/:id", createTask)
router.put("/editTodo/:id", editTodo)

module.exports = router