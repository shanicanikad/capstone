const express = require("express");
const app = express();
const products = require("../models/Products");
const testing = require("../models/Testing");
const vaccine = require("../models/Vaccine");
const currentTracking = require("../models/CurrentTracking");
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/currentTracking")
})

app.get("/products", (req, res) => {
    products.find({}).then((products) => {
        res.json(products);
    });
});

app.get("/testing", (req, res) => {
    testing.find({}).then((testing) => {
        res.json(testing);
    });
});

app.get("/vaccine", (req, res) => {
    vaccine.find({}).then((covid) => {
        res.json(covid);
    });
});

app.get("/currentTracking", (req, res) => {
    currentTracking.find({}).then((covid) => {
        res.json(covid);
    });
});





app.get("/products/:id", (req, res) => {
    products.findById({ _id: req.params.id }).then(
        (covid) => {
            res.json(covid);
        }
    );
});

app.get("/testing/:id", (req, res) => {
    testing.findById({ _id: req.params.id }).then(
        (covid) => {
            res.json(covid);
        }
    );
});

app.get("/vaccine/:id", (req, res) => {
    vaccine.findById({ _id: req.params.id }).then(
        (covid) => {
            res.json(covid);
        }
    );
});
app.get("/currentTracking/:id", (req, res) => {
    currentTracking.findById({ _id: req.params.id }).then(
        (covid) => {
            res.json(covid);
        }
    );
});





app.post("/products", (req, res) => {
    products.create(req.body).then((covid) => {
        res.json(covid);
    });
});

app.post("/testing", (req, res) => {
    testing.create(req.body).then((covid) => {
        res.json(covid);
    });
});
app.post("/vaccine", (req, res) => {
    vaccine.create(req.body).then((covid) => {
        res.json(covid);
    });
});
app.post("/currentTracking", (req, res) => {
    currentTracking.create(req.body).then((covid) => {
        res.json(covid);
    });
});





app.put("/products/id/:id", (req, res) => {
    products.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.put("/testing/id/:id", (req, res) => {
    testing.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.put("/vaccine/id/:id", (req, res) => {
    vaccine.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.put("/currentTracking/id/:id", (req, res) => {
    currentTracking.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});



app.delete("/products/:id", (req, res) => {
    products.findByIdAndDelete(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.delete("/testing/:id", (req, res) => {
    testing.findByIdAndDelete(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.delete("/vaccine/:id", (req, res) => {
    vaccine.findByIdAndDelete(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});

app.delete("/currentTracking/:id", (req, res) => {
    currentTracking.findByIdAndDelete(
        { _id: req.params.id },
        req.body
    ).then((covid) => {
        res.json(covid);
    });
});


app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

