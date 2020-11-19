const express = require("express");
const router = express.Router();

const Burger = require("../models/burger");

router.get("/", (req, res) => {
    Burger.selectAll(data => {
        res.render("index", {burgers: data});
    })
});

router.post("/api/burgers", (req, res) => {
    Burger.create(req.body.burgerName, (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {

});


module.exports = router;