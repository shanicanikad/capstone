const Products = require("../models/Products");
const ProductsList = require("./products.json");

const Testing = require("../models/Testing");
const TestingList = require("./testing.json");

const Vaccine = require("../models/Vaccine");
const VaccineList = require("./vaccine.json");

const CurrentTracking = require("../models/CurrentTracking");
const CurrentTrackingList = require("./currentTracking.json");

Products.deleteMany({}).then(() => {
    Products.create(ProductsList).then((output) => {
        console.log(output);
        Products.find({})
            .then((res) =>
                console.log(res))
    })
        .catch((err) => {
            console.log(err)
        })
})

Testing.deleteMany({}).then(() => {
    Testing.create(TestingList).then((output) => {
        console.log(output);
        Testing.find({})
            .then((res) =>
                console.log(res))
    })
        .catch((err) => {
            console.log(err)
        })
})

Vaccine.deleteMany({}).then(() => {
    Vaccine.create(VaccineList).then((output) => {
        console.log(output);
        Vaccine.find({})
            .then((res) =>
                console.log(res))
    })
        .catch((err) => {
            console.log(err)
        })
})

CurrentTracking.deleteMany({}).then(() => {
    CurrentTracking.create(CurrentTrackingList).then((output) => {
        console.log(output);
        CurrentTracking.find({})
            .then((res) =>
                console.log(res))
    })
        .catch((err) => {
            console.log(err)
        })
})