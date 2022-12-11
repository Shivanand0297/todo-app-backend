const User = require("../../models/Users")

exports.logout = async (req, res) =>{
    try {
        res.cookie("token", {expire: Date.now()}).send("user logged out successfully")
    } catch (error) {
        res.status(402).json({
            success: false,
            message: error.message
        })
    }
}