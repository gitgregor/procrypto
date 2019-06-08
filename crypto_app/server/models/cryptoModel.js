const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const cryptoSchema = new Shema(

    {
        price_usd: Number,
        last_updated: Number
    },
    { timestamps: true }

);

module.exports = mongoose.model("Xara", cryptoSchema)