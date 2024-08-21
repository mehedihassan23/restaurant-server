const { usermodel } = require("../models/models");

const adminCheker = async (req, res) => {
    const {email} = req.params;
    const user = await usermodel.findOne({email})
    let admin = false;
    if(user){
        admin = user.role === "admin"
    }
    res.send(admin)
}

module.exports = {adminCheker}