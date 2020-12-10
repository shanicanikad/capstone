const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Testing = new Schema

    ({
        product: String,
        average_efficiency_percentage: Number,
        average_pricing_USD: Number,
        available: [
            {
                place: String,
                image_url: String,
                price: Number,
                link: String

            },
            {
                place: String,
                image_url: String,
                price: Number,
                link: String

            },
            {
                place: String,
                image_url: String,
                price: Number,
                link: String

            },
            {
                infoLink: String
            }
        ]
    })

module.exports = mongoose.model("Testing", Testing)
