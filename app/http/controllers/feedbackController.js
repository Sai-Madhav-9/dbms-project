const Feedback = require('../../models/feedback')
function feedbackController(){
    return {
        index(req,res){
            res.render("feedback")
        },

        postFeedback(req, res) {
            const { name,phone , email, message }   = req.body



        const feedback = new Feedback({
            name,phone , email, message
            
        })

        feedback.save().then((feedback) => {
            return res.redirect('/')
         }).catch(err => {
                return res.redirect('/feedback')
         })
        }
    }
}


module.exports = feedbackController