const mongoose = require("mongoose")
const {Schema} = mongoose;
const todoModel = new Schema({
    title: {
        type: String, 
        required: [true, "Title is required"]
    },
    task: [String],
},{
    timestamps: true
 })

module.exports = mongoose.model("todo", todoModel)