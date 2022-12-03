const Todo = require("../models/todos")

exports.deleteTask = async (req, res)=>{
    try {
        // grabbing the todo
        const todo = await Todo.findById(req.params.id);

        // validating if todo is there or not
        if(!todo){
            res.status(401).send("Could not found any todo with this id")
        }

        // taking task index
        const {taskIndex} = req.body;
        const taskArrayIndex = Number(taskIndex)
        // checking if task index is number or not
        if(typeof(taskArrayIndex) !== "number"){
            console.log("task index is not number");
            res.send("task index is not number")
        }

        // deleting the task in the array
        todo.task.splice(taskArrayIndex, 1)

        // saving the todo
        await todo.save();
        res.status(201).json({
            success: true, 
            message: "task deleted successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in delete task controller"
        })
    }
}