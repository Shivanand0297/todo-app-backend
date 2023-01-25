const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            maxLength: [20, "Firstname should not be more then 20 characters"],
        },
        lastname: {
            type: String,
            required: true,
            maxLength: [20, "Lastname should not be more then 20 characters"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }

    }
)
module.exports = mongoose.model("users", UserSchema)