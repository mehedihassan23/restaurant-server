const express = require("express")
const { getUser, createUser, deleteUser, updateUser } = require("../controllers/userController")
const { getMenu, createMenu, deleteMenu } = require("../controllers/menuController")
const { getReview } = require("../controllers/reviewController")
const { getCart, createCart, getMyCart, deleteCart } = require("../controllers/cartController")
const { jwtController } = require("../controllers/tokenController")
const { verifytoken } = require("../middlewire/VerifyToken")
const { adminCheker } = require("../controllers/adminController")
const { isAdmin } = require("../middlewire/AdminCheker")
const { paymenetController } = require("../controllers/paymentController")

const router = express.Router()

router.get("/", (req, res) => {
    return res.send("server is running")
})

//user router
router.get("/user", verifytoken, isAdmin, getUser)
router.post("/user", createUser)
router.delete("/user/delete/:email", verifytoken, isAdmin, deleteUser)
router.patch("/user/update/:email", verifytoken, isAdmin, updateUser)

//menu router
router.get("/menu", getMenu)
router.post("/menu", verifytoken, isAdmin, createMenu)
router.delete("/menu/delete/:id", verifytoken, isAdmin, deleteMenu)

//review router
router.get("/reviews", getReview)

//cart router
router.get("/cart", getCart)
router.get("/cart/:email", getMyCart)
router.post("/cart", createCart)
router.delete("/cart/:id", verifytoken,  deleteCart)

//token router
router.post("/jwt", jwtController)

//admin cheking router
router.get("/admin/:email", adminCheker)

//payments route
router.post("/payment", paymenetController)

module.exports = router;