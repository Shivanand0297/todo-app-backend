const User = require("../../models/Users")

exports.logout = async (req, res) =>{
    try {
       return res.clearCookie("token").send("user logged out successfully")
    } catch (error) {
        res.status(402).json({
            success: false,
            message: error.message
        })
    }
}