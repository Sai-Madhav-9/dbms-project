const Recipe = require('../../models/recipe')
function allrecipeController(){
    return {
        async index(req,res){
            const recipes= await Recipe.find()
            // console.log(foods)
            return res.render("allrecipe", { recipes: recipes})
        }
    }
}


module.exports = allrecipeController