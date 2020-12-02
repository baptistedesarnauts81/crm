const data = require("./data.js");

const utils = require("./database_utils.js");

const mysql = require("mysql");

let databaseParams = require("./database_connection.js").databaseParams;

con = mysql.createConnection({
  host: databaseParams.host,
  user: databaseParams.user,
  password: databaseParams.password,
  database: data.databaseName,
});

con.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connecté !");

    liste_tables = [
      "CREATE TABLE client (nom_societe VARCHAR(255) PRIMARY KEY, siret VARCHAR(255), adresse VARCHAR(255) DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL);",
      "CREATE TABLE contact (id_contact INT AUTO_INCREMENT PRIMARY KEY, nom_prenom VARCHAR(255), nom_societe VARCHAR(255), mail VARCHAR(255) DEFAULT NULL, tel VARCHAR(255) DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL) AUTO_INCREMENT = 100;",
      "CREATE TABLE contrat (nom_societe VARCHAR(255), no_contrat VARCHAR(255) PRIMARY KEY, date_debut DATE, date_livraison DATE, montant FLOAT, nb_heures INT, commentaire VARCHAR(255) DEFAULT NULL );",
      "CREATE TABLE livrable (id_livrable INT AUTO_INCREMENT PRIMARY KEY, no_contrat VARCHAR(255), nom_livrable VARCHAR(255), nb_heures_attribuees INT, type VARCHAR(255) DEFAULT NULL, date_livraison DATE DEFAULT NULL, montant FLOAT DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL) AUTO_INCREMENT = 100;",
      "CREATE TABLE mission (id_mission INT AUTO_INCREMENT PRIMARY KEY, no_contrat VARCHAR(255), type VARCHAR(255), nom_mission VARCHAR(255), nb_heures_attribuees INT, date_fin_prevue DATE DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL ) AUTO_INCREMENT = 100;",
      "CREATE TABLE saisie_temps (id_saisie INT AUTO_INCREMENT PRIMARY KEY, nom_mission VARCHAR(255), id_mission INT, mail VARCHAR(255), date_saisie DATE, nb_heures INT, etat_avancement VARCHAR(255) DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL) AUTO_INCREMENT = 100;",
      "CREATE TABLE consultant (mail VARCHAR(255) PRIMARY KEY, nom_prenom VARCHAR(255), experience VARCHAR(255), charge_disponible VARCHAR(255) DEFAULT NULL, commentaire VARCHAR(255) DEFAULT NULL);",
    ];

    liste_tables.forEach((query) => {
      utils.createTable(query, con);
    });

    liste_frg_key = [
      "ALTER TABLE contact ADD CONSTRAINT nom_societe_fk1 FOREIGN KEY (nom_societe) REFERENCES client(nom_societe);",
      "ALTER TABLE contrat ADD CONSTRAINT nom_societe_fk2 FOREIGN KEY (nom_societe) REFERENCES client(nom_societe);",
      "ALTER TABLE saisie_temps ADD CONSTRAINT id_mission_fk1 FOREIGN KEY (id_mission) REFERENCES mission(id_mission);",
      "ALTER TABLE saisie_temps ADD CONSTRAINT mail_fk1 FOREIGN KEY (mail) REFERENCES consultant(mail);",
      "ALTER TABLE livrable ADD CONSTRAINT no_contrat_fk1 FOREIGN KEY (no_contrat) REFERENCES contrat(no_contrat);",
      "ALTER TABLE mission ADD CONSTRAINT no_contrat_fk2 FOREIGN KEY (no_contrat) REFERENCES contrat(no_contrat);",
    ];

    // create link beetwen tables
    liste_frg_key.forEach((query) => {
      utils.createTable(query, con);
    });

    //   // create procedures
    //   liste_procedures = [
    //     "DROP PROCEDURE IF EXISTS procedure_add_avion",
    //     "CREATE PROCEDURE procedure_add_avion (IN model CHAR(20), IN nb_places INT) INSERT INTO avions (type, nb_place) VALUES (model, nb_places);",
    //   ];

    //   liste_procedures.forEach((query) => {
    //     utils.createProcedure(query, con);
    //   });

    // remplissages des tables avions, compagnies et aeroports

    utils.insertElements(
      "INSERT INTO client (nom_societe, siret, adresse, commentaire) VALUES ?",
      data.client,
      con
    );

    utils.insertElements(
      "INSERT INTO contact (nom_prenom, nom_societe, mail, tel, commentaire) VALUES ?",
      data.contact,
      con
    );

    utils.insertElements(
      "INSERT INTO contrat (nom_societe, no_contrat, date_debut, date_livraison, montant, nb_heures, commentaire) VALUES ?",
      data.contrat,
      con
    );

    utils.insertElements(
      "INSERT INTO livrable (no_contrat, nom_livrable, nb_heures_attribuees, type, date_livraison, montant, commentaire) VALUES ?",
      data.livrable,
      con
    );

    utils.insertElements(
      "INSERT INTO mission (no_contrat, type, nom_mission, nb_heures_attribuees, date_fin_prevue, commentaire) VALUES ?",
      data.mission,
      con
    );

    // utils.insertElements(
    //   "INSERT INTO saisie_temps (nom_mission, id_mission, mail, date_saisie, nb_heures, etat_avancement, commentaire) VALUES ?",
    //   data.saisie_temps,
    //   con
    // );

    utils.insertElements(
      "INSERT INTO consultant (mail, nom_prenom, experience, charge_disponible, commentaire) VALUES ?",
      data.consultant,
      con
    );

    con.end(function (err) {
      if (err) return console.log("error:" + err.message);
      else console.log("Connection à la base de données fermée.");
    });
  }
});
