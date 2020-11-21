const mysql = require("mysql");

let connection;

// If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database
// Otherwise it falls back on the local database 'burgers_db'
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        host: 3306,
        database: "burgers_db"
    });
};

connection.connect(err => {
    if(err) {
        console.error("error connection: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;