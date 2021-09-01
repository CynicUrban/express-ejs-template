const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
    res.render("index");
});

module.exports = route;