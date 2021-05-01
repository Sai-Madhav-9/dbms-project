const Offer = require('../../models/offer')
function offersController(){
    return {
        index(req,res){
            res.render("offer")
        },
        postOffer(req, res) {
            const { initialprice,offerprice,dateofexpiry,itemname,restname,itemid}   = req.body



        const offer  = new Offer({
            initialprice,offerprice,dateofexpiry,itemname,restname,itemid 
        })

        offer.save().then((offer) => {
            return res.redirect('/')
         }).catch(err => {
                return res.redirect('/set-offers')
         })
        }
    }
}


module.exports = offersController