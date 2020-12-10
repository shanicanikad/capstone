const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const CurrentTracking = new Schema


    ({

        date: Number,
        states: Number,
        positive: Number,
        negative: Number,
        pending: Number,
        hospitalizedCurrently: Number,
        hospitalizedCumulative: Number,
        inIcuCurrently: Number,
        inIcuCumulative: Number,
        onVentilatorCurrently: Number,
        onVentilatorCumulative: Number,
        recovered: Number,
        dateChecked: String,
        death: Number,
        hospitalized: Number,
        totalTestResults: Number,
        lastModified: String,
        total: Number,
        posNeg: Number,
        deathIncrease: Number,
        hospitalizedIncrease: Number,
        negativeIncrease: Number,
        positiveIncrease: Number,
        totalTestResultsIncrease: Number,
        hash: String
    })

module.exports = mongoose.model("CurrentTracking", CurrentTracking)
