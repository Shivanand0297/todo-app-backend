const User = require("../../models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        // getting input from the frontend
        const { firstname, lastname, email, password } = req.body;

        // validating the input
        if (!firstname || !lastname || !email || !password) {
            return res.status(401).send("all fields are required to create a user")
        }

        // checking for already existing user
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(401).send("user already present in the database, please login")
        }

        // encrypting the password before storing into database
        const encryptedPassword = await bcrypt.hash(password, 10)

        // finally creating the user in the database
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword
        })

        // removing password from user before sending response
        user.password = undefined
        return res.status(201).json({
            success: true,
            message: "user created Successfully",
            user
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
            status: "Failed to create user"
        })
    }
}