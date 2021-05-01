const Feedback = require('../../models/feedback')
function allfeedbackController(){
    return {
        async index(req,res){
            const feedbacks= await Feedback.find()
            // console.log(foods)
            return res.render("allfeedback", { feedbacks: feedbacks})
        }
    }
}


module.exports = allfeedbackController