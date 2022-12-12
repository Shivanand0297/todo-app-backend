const Todo = require("../models/todos")
const Users = require("../models/Users")

exports.deleteTodo = async (req, res)=>{
    try {
        // getting user by id
        const user = await Users.findById(req.user.id);

        if(!(req.params.id)){
            res.status(404).send("requested todo not found in the data base")
        }
        // gettin todo by id
        let todo = await Todo.findById(req.params.id)
        todo.user = user.id;

        // grabing the todo by id and deleting 
         todo = await Todo.findByIdAndDelete(req.params.id)

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