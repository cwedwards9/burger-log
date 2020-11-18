const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    host: 3306,
    database: "burgers_db"
});

connection.connect(err => {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;