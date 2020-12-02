const mysql = require("mysql");
const data = require("./data.js");
const utils = require("./database_utils.js");

let databaseParams = require("./database_connection.js").databaseParams;

// connection à l'instance MySQL
con = mysql.createConnection({
  host: databaseParams.host,
  user: databaseParams.user,
  password: databaseParams.password,
});

con.connect(function (err) {
  if (err) throw err;
  else console.log("Connecté !");
});

// creation d'une base de données
utils.createDataBase(data.databaseName, con, () => {});

con.end(function (err) {
  if (err) {
    return console.log("error:" + err.message);
  } else {
    console.log("Connection à la base de données fermée.");
  }
});
