const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataContainer = new Schema(
    {
        ids: Number,
        price_usd: Number,
        time: Number
    }
);
module.exports = mongoose.model("Cryptony", DataContainer)
