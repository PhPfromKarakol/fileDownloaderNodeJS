// console.log('Hi');
const express = require('express');
const app = express();
const ejs = require('ejs');
engine = require('ejs-mate');
const multer = require('multer');
const exp = require('constants');

const folder = require('./folder');


const storageSettings = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    dest: 'uploads/',
});



app.use(multer({ storage: storageSettings }).single('file'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', "ejs");



app.get('/', (req, res) => {
    //console.log(folder.getfiles('./uploads/'));
    var links = folder.getfiles('./uploads/');
    res.render("index", {
        title: "Main",
        descip: "Nurbek is the best football player in the world",
        links: links
    });
});

app.get('/upload', (req, res) => {
    res.render('upload', {
        buttonName: "submit"
    });
});

app.post('/upload', (req, res, next) => {
    let filedata = req.file;
    if (!filedata) {
        res.send('File Error');
    }
    else {
        res.render('upload', {
            buttonName: "submit"
        });
    }
    next();
});

app.listen(3000, () => {
    console.log('working');
});