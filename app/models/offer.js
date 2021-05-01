const mongoose = require('mongoose')
const Schema = mongoose.Schema

const offerSchema = new Schema({
    initialprice: { type: String, required: true },
    offerprice: { type: String, required: true },
    dateofexpiry: { type: String, required: true},
    itemname: { type: String, required: true },
    restname: { type: String, required: true },
    itemid: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Offer', offerSchema)