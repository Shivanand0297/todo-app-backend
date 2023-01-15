const express = require("express");
// importing all the controllers
const { createTask } = require("../controllers/Todo Controllers/createTask");
const { createTodo } = require("../controllers/Todo Controllers/createTodo");
const { deleteTask } = require("../controllers/Todo Controllers/deleteTask");
const { deleteTodo } = require("../controllers/Todo Controllers/deleteTodo");
const { editTask } = require("../controllers/Todo Controllers/editTask");
const { editTodo } = require("../controllers/Todo Controllers/editTodo");
const { getTodos } = require("../controllers/Todo Controllers/getTodos");
const { getTodo } = require("../controllers/Todo Controllers/getTodo")
const { home } = require("../controllers/Todo Controllers/home");
const { search } = require("../controllers/Todo Controllers/search");
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