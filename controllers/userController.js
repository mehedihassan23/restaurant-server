const { usermodel } = require("../models/models")

const getUser = async (req, res) => {
    const user = await usermodel.find()
    return res.send(user)
}
const createUser = async (req, res) => {
    const {name, email} = req.body;
    const isExist = await usermodel.findOne({email})
    if(isExist){
        return res.send("User already Exists")
    }
    const saveuser = await new usermodel({
        name, email, role: "user"
    }).save()
    res.send(saveuser)
}
const deleteUser = async (req, res) => {
    const {email} = req.params
    const deleteUserResult = await usermodel.deleteOne({email})
    res.send(deleteUserResult)
}
const updateUser = async (req, res) => {
    const {email} = req.params
    const updateResult = await usermodel.updateOne({email}, { $set: { 
        role: "admin" }
    } )
    res.send(updateResult)
}

module.exports = {getUser, createUser, deleteUser, updateUser}