const Todo = require("../models/todos")
const Users = require("../models/Users")

exports.editTodo = async (req, res)=>{
    try {
        // first getting user to edit into
        const user = await Users.findById(req.user.id);

        // validating for todo id
        if(!(req.params.id)){
            res.status(404).send("requested todo not found in the data base")
        }
        // grabing the todo by id and updating 
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

        // saving userid in the todo
        todo.user = user.id;
        await todo.save();

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