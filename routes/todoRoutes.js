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
const Auth = require("../middleware/auth");
const router = express.Router();

router.get("/", home)
router.post("/api/createTodo", Auth, createTodo)
router.get("/api/getTodos", Auth, getTodos)
router.post("/api/createTask/:id", Auth, createTask)
router.put("/api/editTodo/:id", editTodo)
router.patch("/api/editTask/:id", editTask)
router.delete("/api/deleteTodo/:id", deleteTodo)
router.delete("/api/deleteTask/:id", deleteTask)
router.get("/api/getTodo/:id", getTodo)
router.get("/api/search", search)
module.exports = router