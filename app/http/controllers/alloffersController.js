const Offer = require('../../models/offer')
function alloffersController(){
    return {
        async index(req,res){
            const offers= await Offer.find()
            // console.log(foods)
            return res.render("alloffers", { offers: offers})
        }
    }
}


module.exports = alloffersController