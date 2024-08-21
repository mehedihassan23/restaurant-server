const { usermodel } = require("../models/models")

const isAdmin = async (req, res, next) => {
    const {email} = req.decoded
    const isExist = await usermodel.findOne({email})
    let admin = false
    if(isExist){
       admin =  isExist.role === "admin"    
    } 
    if(!admin){
        return res.send("you are not an admin")
    }
    next()
}

module.exports = {isAdmin}