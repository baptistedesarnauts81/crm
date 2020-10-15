

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql")

const db = mysql.createPool({
    host: "sql7.freemysqlhosting.net",
    user: "sql7370957",
    password: "28rH66bFPu",
    database: "sql7370957",
    port: "3306"
});

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {

    db.query("SELECT * FROM activites ", (err, result) => {
        res.send(result);
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001");
})