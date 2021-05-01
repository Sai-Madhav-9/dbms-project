const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true},
    recipeeName: { type: String, required: true },
    recipeeIngredients: { type: String, required: true },
    urlOfRecipee: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)