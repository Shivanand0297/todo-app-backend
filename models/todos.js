const mongoose = require("mongoose")
const {Schema} = mongoose;
const todoModel = new Schema({
    title: {
        type: String, 
        required: [true, "Title is required"]
    },
    task: [String]
})

module.exports = mongoose.model("todo", todoModel)