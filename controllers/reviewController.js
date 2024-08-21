const { reviewmodel } = require("../models/models")

const getReview = async (req, res) => {
    const review = await reviewmodel.find()
    return res.send(review)
}

module.exports = {getReview}