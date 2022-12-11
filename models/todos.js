const mongoose = require("mongoose")
const users = require("./Users")
const {Schema} = mongoose;
const todoModel = new Schema(
    {
        title: {
            type: String, 
            required: [true, "Title is required"]
        },
        task: [String],
        isCompleted: {
            type: Boolean,
            default: false,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: users,
            required: [true, "User ID is  required to create a todo"],
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("todo", todoModel)