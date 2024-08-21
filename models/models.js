const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        role: String
})
 
const menuSchema = new mongoose.Schema({
        name: String,
        recipe: String,
        image: String,
        category: String,
        price: Number,
        deleteImage: String
})
const reviewSchema = new mongoose.Schema({
        name: String,
        details: String,
        rating: Number
})
const cartSchema = new mongoose.Schema({
        name: String,
        recipe: String,
        image: String,
        price: Number,
        menuId: String,
        email: {
                type: String,
                trim: true,
                lowercase: true,
        }
})

const usermodel = mongoose.model("users", userSchema)
const menumodel = mongoose.model("menus", menuSchema)
const reviewmodel = mongoose.model("reviews", reviewSchema)
const cartmodel = mongoose.model("carts", cartSchema)

module.exports = {usermodel, menumodel, reviewmodel, cartmodel}