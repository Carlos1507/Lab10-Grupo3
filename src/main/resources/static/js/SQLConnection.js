const express = require('express');
const mysql = require('mysql2');
const bp = require('body-parser');
const app = express();
const file_path = "../files/banco_de_preguntas_a_aleatorizar.txt"
const file_importer = require('./fileReader.js');

/**Exportar codigo de FilearReader hacia la base de datos**/
let samir = file_importer.parseFile(file_path);


let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stfgames',
    port: 3306
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Conexión exitosa a base de datos");
});


app.post('/uploadTxt', function (req, res) {

    let idPregunta = req.body.idPregunta;
    let contenido = req.body.contenido;

    let idAlternativa = req.body.idAlternativa;
    let contenido1 = req.body.contenido1;
    let opcion = req.body.opcion;

    let parametros = {idPregunta:idPregunta,
        contenido:contenido};

    let parametros1 = {idAlternativa:idAlternativa,
        contenido: contenido1,
        opcion: opcion,
        idPregunta: idPregunta};

    let query = "INSERT INTO Pregunta (idPregunta, contenido) VALUES (?,?,?)";
    let query1 = "INSERT INTO Alternativa (idAlternativa, contenido, opcion, idPregunta) VALUES (?,?,?,?)";

    conn.query(query1, parametros1, function (err, result) {
        if (err) throw err;

        conn.query("SELECT * FROM Alternativa", function (err, results) {
            res.json(results);
        });
    });

    conn.query(query, parametros, function (err, result) {
        if (err) throw err;

        conn.query("SELECT * FROM Pregunta", function (err, results) {
            res.json(results);
        });
    });


});
