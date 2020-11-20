const orm = require("../config/orm");

// The Burger model with three methods: 1) selecting all data 2) creating and 3) updating a new piece of data
const Burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    create: (val, cb) => {
        orm.insertOne("burgers", val, (res) => {
            cb(res);
        });
    },
    update: (condition, cb) => {
        let conditionNum = Number(condition);
        orm.updateOne("burgers", true, conditionNum, (res) => {
            cb(res);
        });
    }
};

module.exports = Burger;