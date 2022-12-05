const express = require("express");
// importing all the controllers
const { createTask } = require("../controllers/createTask");
const { createTodo } = require("../controllers/createTodo");
const { deleteTask } = require("../controllers/deleteTask");
const { deleteTodo } = require("../controllers/deleteTodo");
const { editTask } = require("../controllers/editTask");
const { editTodo } = require("../controllers/editTodo");
const { getTodos } = require("../controllers/getTodos");
const { getTodo } = require("../controllers/getTodo")
const { home } = require("../controllers/home");
const { search } = require("../controllers/search");
const router = express.Router();

router.get("/", home)
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)
router.post("/createTask/:id", createTask)
router.put("/editTodo/:id", editTodo)
router.patch("/editTask/:id", editTask)
router.delete("/deleteTodo/:id", deleteTodo)
router.delete("/deleteTask/:id", deleteTask)
router.get("/getTodo/:id", getTodo)
router.get("/search", search)
module.exports = router