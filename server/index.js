

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")

const db = mysql.createPool({
    host: "sybilcz311.mysql.d",
    user: "sybilcz311",
    password: "sybilBDD13",
    database: "sybilcz311"
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

app.get("/api/fetchdata", (req, res) => {

    db.query("SELECT MONTH(Date_debut) as start_month FROM activites ", (err, result) => {
        res.send(result);
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001");
})