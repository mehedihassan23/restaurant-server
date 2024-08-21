const jwt = require("jsonwebtoken")

const verifytoken = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.'});
      }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=> {
         if(err) {
            return res.send("Token verification failled")
         }
         req.decoded = decoded       
    })
    next()
}
module.exports = {verifytoken}