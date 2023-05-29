
const express = require('express')
const app = express();

app.listen('3000')

app.use(express.json())


//app.route('/').get( (req, res) => res.send("hello word"))
//app.route('/').post( (req, res) => console.log(req.body))

let author = "Eliezer"
app.route('/').get( (req, res) => res.send(author))

app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})