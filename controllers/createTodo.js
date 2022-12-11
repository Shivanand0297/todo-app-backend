const Todo = require("../models/todos");
const Users = require("../models/Users");

exports.createTodo = async (req, res)=>{
    try {
        const {title, task} = req.body;
        if(!title){
            res.status(401).json({
                success: false, 
                message: "Title is required"
            })
        }
        // finding the user by id to create task
        const user = await Users.findById(req.user.id)

        // creating todo title entry in the db
        const todo = await Todo.create({
            title, 
            task,
            user: user.id
        })
        res.status(201).json({
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