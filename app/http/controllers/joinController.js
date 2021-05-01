const Join = require("../../models/join")
function joinController(){
    return {
        index(req,res){
            res.render("joinourchain")
        },
        postJoin(req, res) {
            const { name,phone , email, restaurantName,restaurantLocation,holidays,description}   = req.body



        const join  = new Join({
            name,phone , email, restaurantName,restaurantLocation,holidays,description
            
        })

        join.save().then((join) => {
            return res.redirect('/')
         }).catch(err => {
                return res.redirect('/join-our-chain')
         })
        }
    }
}


module.exports = joinController