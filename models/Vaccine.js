const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Vaccine = new Schema

    ({
        product: String,
        average_efficiency_percentage: Number,
        average_pricing_USD: Number,
        available: [
            {
                place: String,
                image_url: String,
                infoLink: String
            }
        ]
    })

module.exports = mongoose.model("Vaccine", Vaccine)
