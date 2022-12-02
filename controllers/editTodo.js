const Todo = require("../models/todos")

exports.editTodo = async (req, res)=>{
    try {

        if(!(req.params.id)){
            res.status(404).send("requested todo not found in the data base")
        }
        // first grabing the todo by id and updating 
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

        res.status(201).json({
            success: true, 
            message: "todo updated successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in editTodo controller"
        })
    }
}