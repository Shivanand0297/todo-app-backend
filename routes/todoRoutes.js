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
router.put("/api/editTodo/:id", Auth, editTodo)
router.patch("/api/editTask/:id", Auth, editTask)
router.delete("/api/deleteTodo/:id", Auth, deleteTodo)
router.delete("/api/deleteTask/:id", Auth, deleteTask)
router.get("/api/getTodo/:id", Auth, getTodo)
router.get("/api/search", Auth, search)
module.exports = router