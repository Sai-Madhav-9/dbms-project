const Recipe = require('../../models/recipe')
function recipeController(){
    return {
        index(req,res){
            res.render("recipe")
        },
        postRecipe(req, res) {
            const { name,phone,email,recipeeName,recipeeIngredients,urlOfRecipee,message}   = req.body



        const recipe  = new Recipe({
            name,phone,email,recipeeName,recipeeIngredients,urlOfRecipee,message
        })

        recipe.save().then((recipe) => {
            return res.redirect('/')
         }).catch(err => {
                return res.redirect('/recipe')
         })
        }
    }
}


module.exports = recipeController