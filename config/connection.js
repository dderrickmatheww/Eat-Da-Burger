var mysql = require("mysql");

connection = mysql.createConnection({
    host: 'localhost',
    user: 'dderrickmatheww',
    password: 'Blind5656!',
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;