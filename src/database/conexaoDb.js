const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "docenanda"
})

con.connect((err) => {
    if(err) return err;
    console.log("Connected!");
})

module.exports = { con } //desestruturação. Estamos passando um objeto apenas com o con!