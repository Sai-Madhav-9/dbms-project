const Join = require('../../models/join')
function alljoinController(){
    return {
        async index(req,res){
            const joins= await Join.find()
            // console.log(foods)
            return res.render("alljoin", { joins: joins})
        }
    }
}


module.exports = alljoinController