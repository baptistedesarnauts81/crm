const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
let databaseParams = require("./database/database_connection.js")
  .databaseParams;
let data = require("./database/data.js");

const db = mysql.createPool({
  host: databaseParams.host,
  user: databaseParams.user,
  password: databaseParams.password,
  database: data.databaseName,
  port: 3306,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/nouveau_client", (req, res) => {
  const nom_societe = req.body.info.nom_societe;
  const siret = req.body.info.siret;
  const adresse = req.body.info.adresse_societe;
  const commentaire = req.body.info.commentaire;
  console.log(nom_societe, siret, adresse, commentaire);
  const sql_query =
    "INSERT INTO client (nom_societe, siret, adresse, commentaire) VALUES (?,?,?,?)";
  db.query(
    sql_query,
    [nom_societe, siret, adresse, commentaire],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/nouveau_contact", (req, res) => {
  const nom_prenom = req.body.info.nom_prenom;
  const nom_societe = req.body.info.nom_societe;
  const mail = req.body.info.mail;
  const tel = req.body.info.tel;
  const commentaire = req.body.info.commentaire;

  const sql_query =
    "INSERT INTO contact (nom_prenom, nom_societe, mail, tel, commentaire) VALUES (?,?,?,?,?)";
  db.query(
    sql_query,
    [nom_prenom, nom_societe, mail, tel, commentaire],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/nouveau_contrat", (req, res) => {
  const no_contrat = req.body.info.no_contrat;
  const nom_societe = req.body.info.nom_societe;
  const date_debut = req.body.info.date_debut;
  const date_livraison = req.body.info.date_livraison;
  const montant = req.body.info.montant;
  const nb_heures = req.body.info.nb_heures;
  const commentaire = req.body.info.commentaire;

  const sql_query =
    "INSERT INTO contrat (no_contrat, nom_societe, date_debut, date_livraison, montant, nb_heures, commentaire) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sql_query,
    [
      no_contrat,
      nom_societe,
      date_debut,
      date_livraison,
      montant,
      nb_heures,
      commentaire,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});
app.post("/api/nouveau_livrable", (req, res) => {
  const no_contrat = req.body.info.no_contrat;
  const nom_livrable = req.body.info.nom_livrable;
  const nb_heures_attribuees = req.body.info.nb_heures_attribuees;
  const type = req.body.info.type;
  const date_livraison = req.body.info.date_livraison;
  const montant = req.body.info.montant;
  const commentaire = req.body.info.commentaire;

  const sql_query =
    "INSERT INTO livrable (no_contrat, nom_livrable, nb_heures_attribuees, type, date_livraison, montant,  commentaire) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sql_query,
    [
      no_contrat,
      nom_livrable,
      nb_heures_attribuees,
      type,
      date_livraison,
      montant,
      commentaire,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/nouvelle_mission", (req, res) => {
  const no_contrat = req.body.info.no_contrat;
  const type = req.body.info.type;
  const nom_mission = req.body.info.nom_mission;
  const nb_heures_attribuees = req.body.info.nb_heures_attribuees;
  const date_fin_prevue = req.body.info.date_fin_prevue;
  const commentaire = req.body.info.commentaire;

  const sql_query =
    "INSERT INTO mission (no_contrat, type, nom_mission, nb_heures_attribuees, date_fin_prevue,  commentaire) VALUES (?,?,?,?,?,?)";
  db.query(
    sql_query,
    [
      no_contrat,
      type,
      nom_mission,
      nb_heures_attribuees,
      date_fin_prevue,
      commentaire,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/nouvelle_saisie", (req, res) => {
  const nom_mission = req.body.info.nom_mission;
  const id_mission = req.body.info.id_mission;
  const mail = req.body.info.mail;
  const date_saisie = req.body.info.date_saisie;
  const nb_heures = req.body.info.nb_heures;
  const etat_avancement = req.body.info.etat_avancement;
  const commentaire = req.body.info.commentaire;

  const sql_query =
    "INSERT INTO saisie_temps ( nom_mission, date_saisie, id_mission, mail, nb_heures, etat_avancement, commentaire) VALUES (?,?,?,?,?,?,?)";

  db.query(
    sql_query,
    [
      nom_mission,
      date_saisie,
      id_mission,
      mail,
      nb_heures,
      etat_avancement,
      commentaire,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/nouveau_consultant", (req, res) => {
  const mail = req.body.info.mail;
  const nom_prenom = req.body.info.nom_prenom;
  const experience = req.body.info.experience;
  const charge_disponible = req.body.info.charge_disponible;
  const commentaire = req.body.info.commentaire;
  console.log(mail, nom_prenom);

  const sql_query =
    "INSERT INTO consultant (mail, nom_prenom, experience, charge_disponible, commentaire) VALUES (?,?,?,?,?)";
  db.query(
    sql_query,
    [mail, nom_prenom, experience, charge_disponible, commentaire],
    (err, result) => {
      console.log(err);
    }
  );
});

app.get("/api/get_client", (req, res) => {
  const sql_query = "SELECT * FROM client ";
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_contrat", (req, res) => {
  const sql_query = "SELECT * FROM contrat";
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_contrat", (req, res) => {
  const sql_query = "SELECT * FROM contrat";
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_data", (req, res) => {
  const sql_query = req.query.query;
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_contrat_condition", (req, res) => {
  const condition = req.query.client;
  const sql_query =
    "SELECT no_contrat FROM contrat WHERE nom_societe=" + "'" + condition + "'";
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_mission", (req, res) => {
  const condition = req.query.contrat;
  const sql_query =
    "SELECT nom_mission, id_mission FROM mission WHERE no_contrat=" +
    "'" +
    condition +
    "'";
  console.log(sql_query);
  db.query(sql_query, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
