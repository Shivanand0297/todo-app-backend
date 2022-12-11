const Todo = require("../models/todos")

exports.getTodos = async (req, res)=>{
    try {
        // getting all the stored todos
        const todos = await Todo.find({
            user: req.user.id,
        });
        // sorting based on date
        const {sortTodo} = req.body;    // taking sort button input
        if(sortTodo){
            const sortedTodos = await Todo.find().sort({updatedAt: -1})
            res.status(200).json({
                success: true, 
                message: "These are the all sorted todos",
                sortedTodos
            })
            return;
        }
        res.status(201).json({
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