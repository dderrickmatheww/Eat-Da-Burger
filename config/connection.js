var mysql = require("mysql");

connection = mysql.createConnection({
    host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'wcz3gg4349hvdg1n',
    password: 'tmciqh918j656tib',
    database: "gsrw5tkj91yfprsx"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;