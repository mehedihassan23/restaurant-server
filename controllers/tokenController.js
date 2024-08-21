const jwt = require("jsonwebtoken")

const jwtController = (req, res) => {
    const {email} = req.body
    const token =  jwt.sign({email}, process.env.SECRET_KEY, {expiresIn: "5h"})

    res.send(token)
}


module.exports = {jwtController}