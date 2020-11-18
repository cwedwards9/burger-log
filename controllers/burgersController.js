const express = require("express");
const router = express.Router();

const Burger = require("../models/burger");

router.get("/", (req, res) => {
    Burger.selectAll(data => {
        res.render("index", {burgers: data});
    })
});

router.post("/api/burgers", (req, res) => {

});

router.put("/api/burgers/:id", (req, res) => {

});


module.exports = router;