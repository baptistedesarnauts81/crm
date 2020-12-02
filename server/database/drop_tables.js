const data = require("./data.js");

const utils = require("./database_utils.js");

const mysql = require("mysql");

con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: data.databaseName,
  });

con.connect(function (err) {
    
    if (err) throw err;
    else{
        
        console.log("Connecté !");

        liste_frg_key_drop = [
            "ALTER TABLE contact DROP FOREIGN KEY nom_societe_fk1;",
            "ALTER TABLE contrat DROP FOREIGN KEY nom_societe_fk2;",
            "ALTER TABLE saisie_temps DROP FOREIGN KEY id_mission_fk1;",
            "ALTER TABLE saisie_temps DROP FOREIGN KEY mail_fk1;",
            "ALTER TABLE livrable DROP FOREIGN KEY no_contrat_fk1;",
            "ALTER TABLE mission DROP FOREIGN KEY no_contrat_fk2;",
          ];
    
        liste_frg_key_drop.forEach((query) => {
            utils.deleteTable(query, con);
        });
        const drop_table_sql = "DROP TABLE IF EXISTS ";
        data.list_tables.forEach((value, index) => {
                utils.deleteTable(drop_table_sql + value, con);
        });
    };
    con.end(function (err) {
        if (err) return console.log("error:" + err.message);
        else console.log("Connection à la base de données fermée.");
    });
});