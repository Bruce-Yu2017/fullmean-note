var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, './views'));
// mongoose.Promise = global.Promise;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/note');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, "/public/dist")));
var models_path = path.join(__dirname, './../models');

var Schema = mongoose.Schema;
var NoteSchema = new mongoose.Schema({
    content: String
}, {timestamps: true})
mongoose.model("Note", NoteSchema);
var Note = mongoose.model("Note");

app.post("/notes", function(req, res) {
    var note = new Note({content: req.body.note});
    note.save(function(err) {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/notes")
        }
    })
})

app.get("/notes", function(req, res) {
    Note.find({}).exec(function(err, notes) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(notes);
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});