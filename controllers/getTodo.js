const Todo = require("../models/todos")

exports.getTodo = async (req, res)=>{
    try {
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            res.status(401).send("Could not find todo with this id")
        }
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