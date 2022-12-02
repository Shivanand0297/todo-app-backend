const Todo = require("../models/todos")

exports.getTodos = async (req, res)=>{
    try {
        // getting all the stored todos
        const todos = await Todo.find();
        req.status(201).json({
            success: true, 
            message: "These are the all todos",
            todos
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in getTodos controller"
        })
    }
}