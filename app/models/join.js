const mongoose = require('mongoose')
const Schema = mongoose.Schema

const joinSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true},
    restaurantName: { type: String, required: true },
    restaurantLocation: { type: String, required: true },
    holidays: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Join', joinSchema)