const Todo = require("../models/todos")
const Users = require("../models/Users")

exports.getTodo = async (req, res)=>{
    try {
        // getting user by id
        const user = await Users.findById(req.user.id)

        const todo = await Todo.findById(req.params.id)
        if(!todo){
            res.status(401).send("Could not find todo with this id")
        }
        // adding user id in the todo's user
        todo.user = user.id;
        res.status(201).json({
            success: true, 
            message: "this is the requested todo",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in getTodos controller"
        })
    }
}