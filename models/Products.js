const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Products = new Schema


    ({

        product: String,
        average_efficiency_percentage: Number,
        average_pricing_USD: Number,
        infoLink: String,
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
                link: String,
            }
        ]
    })

module.exports = mongoose.model("Products", Products)
