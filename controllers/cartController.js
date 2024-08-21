
const { cartmodel } = require("../models/models")

const getCart = async (req, res) => {
    const cart = await cartmodel.find()
    res.send(cart)
}
const getMyCart = async (req, res) => {
      const {email} = req.params
      const mycart = await cartmodel.find({email})
      res.send(mycart)
}
const createCart = async (req, res) =>{
    const {_id, name, recipe, image, price, email} = req.body
    const newCart = {name, recipe, image, price, menuId: _id, email}
    const isExists = await cartmodel.findOne({menuId: _id})
    if(isExists){
        return res.send({success: false})
    }
    const saveCart = await new cartmodel(newCart).save()
    res.status(201).send({saveCart, success: true})
}
const deleteCart = async (req, res) => {
    const {id} = req.params
    const {email} = req.decoded
    const cartEmail = await cartmodel.findOne({_id: id})
    if (email  !== cartEmail.email){
        return res.send("Unauthorized access")
    } 
    const deleteresult = await cartmodel.deleteOne({_id: id})
    res.send(deleteresult)

}

module.exports = {getCart, getMyCart, createCart, deleteCart}