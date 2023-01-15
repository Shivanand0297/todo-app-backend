const Todo = require("../../models/todos")

exports.home = async (req, res)=>{
    try {
        res.status(201).send("welcome to home page")
    } catch (error) {
        res.status(401).json({
            message: error.message, 
            status: "Error in home controller"
        })
    }
}