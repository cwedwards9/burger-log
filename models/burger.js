const orm = require("../config/orm");

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