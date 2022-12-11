const jwt = require("jsonwebtoken")
const Auth = (req, res, next) =>{
    console.log("req.cookies: ", req.cookies);
    // extracting token from cookies
    const token = req.cookies.token || req.header.token

    // checking if token is present or not
    if(!token){
        return res.status(403).send("Access denied")
    }

    // if present varify the token by jwt
    try {
        const decodeToken = jwt.verify(token , process.env.SECRET) // will get {id: user._id}
        console.log("decodeToken:",decodeToken);
    
        // adding another property in the req object to store decodeToken
        req.user = decodeToken    
    } catch (error) {
        console.log(error.message);
        res.send("invalid token")
    }
    return next()
}

module.exports = Auth