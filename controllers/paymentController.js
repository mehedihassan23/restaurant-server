const stripe = require("stripe")(process.env.STRIPE_SECRET_kEY)

const paymenetController = async (req, res) => {
    const {price} = req.body
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: price*100,
        currency: "usd",    
        payment_method_types: ["card"]
      });
    
      res.send({ clientSecret: paymentIntent.client_secret });
}

module.exports = {paymenetController}