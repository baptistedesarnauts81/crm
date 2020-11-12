

const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql")

const db = mysql.createPool({
    host: "db4free.net",
    user: "modbdd69",
    password: "modavecjules",
    database: "bdd4mod",
    port : 3306
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/insert_action", (req, res) => {

    const nom_prenom = req.body.info.nom_premon
    const type = req.body.info.type
    const date_debut = req.body.info.date_debut
    const date_fin = req.body.info.date_fin
    const montant = req.body.info.montant
    const interet = req.body.info.interet
    const commentaire = req.body.info.commentaire

    const sql_query = "INSERT INTO action (nom_prenom, type, date_debut, date_fin, montant, interet, commentaire) VALUES (?,?,?,?,?,?,?)";
    console.log(nom_prenom,type,date_fin,date_debut,montant,interet,commentaire)
    db.query(sql_query, [nom_prenom, type, date_debut, date_fin, montant, interet, commentaire], (err, result) => {
        console.log(result);
        console.log(err)
    })
    // db.query("SELECT * FROM action", (err, result)=>{
    //     console.log(result);
    //     console.log(err);
    // })
    
})

app.listen(3001, () => {
    console.log("running on port 3001");
})