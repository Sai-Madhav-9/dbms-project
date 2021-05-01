function forgotController(){
    return {
        index(req,res){
            res.render("forgot")
        },
        show(req, res) {
            const token = req.params.token
            const id = req.params.id
            return res.render('reset', { token , id})
           
        }
    }
}


module.exports = forgotController