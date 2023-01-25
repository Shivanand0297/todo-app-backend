const User = require("../../models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.login = async (req, res) => {
    try {
        // taking input from frontend
        const { email, password } = req.body

        // validating input
        if (!email || !password) {
            return res.status(402).send("Email and Password are required to login")
        }

        // checking for user in database
        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {
                    id: user._id
                },

                process.env.SECRET,
                {
                    expiresIn: process.env.EXPIRY
                }
            )

            user.password = undefined
            // cookies options
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),  // mili seconds
                httpOnly: true  //can be accessed by server only
            }
            // return res.status(200).cookie("token", token, options).json({
            //     success: true,
            //     message: "You are Successfully logged in",
            //     token,
            //     user,
            // })
            res.cookie('token', token, options)
            return res.status(200).json({
                success: true,
                message: 'login success',
                user
            })

        }
        return res.status(402).send("User not found, Email or password is incorrect")

    } catch (error) {
        console.log(error);
        return res.status(402).send(error.message)
    }
}

