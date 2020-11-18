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
    update: (val, condition, cb) => {
        orm.updateOne("burgers", val, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = Burger;