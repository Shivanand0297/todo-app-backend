const Todo = require("../models/todos")

exports.createTodo = async (req, res)=>{
    try {
        const {title} = req.body;
        if(!title){
            req.status(401).json({
                success: false, 
                message: "Title is required"
            })
        }
        // creating todo title entry in the db
        const todo = await Todo.create({title: title})
        req.status(201).json({
            success: true, 
            message: "Todo created successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in createTodo controller"
        })
    }
}