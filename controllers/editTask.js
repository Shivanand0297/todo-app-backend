const Todo = require("../models/todos");
const Users = require("../models/Users");

exports.editTask = async (req, res)=>{
    try {
        // getting the user by userid
        const user = await Users.findById(req.user.id);

        // grabbing the todo
        const todo = await Todo.findById(req.params.id);

        // validating if todo is there or not
        if(!todo){
            res.status(401).send("Could not found any todo with this id")
        }

        // taking task index and updated task
        const {taskIndex, updatedTask} = req.body;
        const taskArrayIndex = Number(taskIndex)
        // checking if task index is number or not
        if(typeof(taskArrayIndex) !== "number"){
            console.log("task index is not number");
            res.send("task index is not number")
        }

        // updating the task in the array
        todo.task[taskArrayIndex] = updatedTask;
        todo.user = user.id;
        // saving the todo
        await todo.save();
        res.status(201).json({
            success: true, 
            message: "task updated successfully",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in edit task controller"
        })
    }
}