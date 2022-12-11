const Todo = require("../models/todos")
const Users = require("../models/Users")

exports.createTask = async (req, res)=>{
    try {
        // getting user to create task into
        const user = await Users.findById(req.user.id)

        // first grabing the todo in which task is to be created
        const todo = await Todo.findById(req.params.id)

        if(!todo){
            res.status(400).send("Cannot find your todo")
        }

        // taking task from the frontend
        const {task} = req.body;
        
        // appending the task in the task array of the above todo
        todo.task.push(task)
        todo.user = user.id
        // saving the todo
        await todo.save();

        res.status(201).json({
            success: true, 
            message: "task created successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in createTodo controller"
        })
    }
}