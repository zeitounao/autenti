

var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: 'requisição realizada com sucesso"'
    })
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});

app.get("/download", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./file.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});