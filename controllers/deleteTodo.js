const Todo = require("../models/todos")

exports.deleteTodo = async (req, res)=>{
    try {

        if(!(req.params.id)){
            res.status(404).send("requested todo not found in the data base")
        }
        // first grabing the todo by id and deleting 
        const todo = await Todo.findByIdAndDelete(req.params.id)

        res.status(201).json({
            success: true, 
            message: "todo deleted successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in deleteTodo controller"
        })
    }
}