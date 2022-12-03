const express = require("express");
const { createTask } = require("../controllers/createTask");
const { createTodo } = require("../controllers/createTodo");
const { editTask } = require("../controllers/editTask");
const { editTodo } = require("../controllers/editTodo");
const { getTodos } = require("../controllers/getTodos");
const { home } = require("../controllers/home");
const router = express.Router();

router.get("/", home)
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)
router.post("/createTask/:id", createTask)
router.put("/editTodo/:id", editTodo)
router.patch("/editTask/:id", editTask)
module.exports = router