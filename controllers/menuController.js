const { menumodel } = require("../models/models")


const getMenu = async (req, res) => {
    const menu = await menumodel.find()
    return res.send(menu)
}
const createMenu = async (req, res) => {
    const {name, category, price, recipe, image, deleteImage} = req.body
    const menuData = {name, recipe, image, category, price, deleteImage}
    const menuresponse = await new menumodel(menuData).save()
    res.send(menuresponse)
     
}
const deleteMenu = async (req, res) => {
    const {id} = req.params
    const deleteResult = await menumodel.findByIdAndDelete(id)
    console.log(deleteResult)

    res.send(deleteResult)
}

module.exports = {getMenu, createMenu, deleteMenu}