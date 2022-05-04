const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sherlock4444',
    database: 'cruddatabase'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {

    const sqlSelct = " SELECT * FROM book;"
    db.query(sqlSelct, (err, result) => {
        res.send(result)

    })
})

app.post('/api/insert', (req, res) => {

    const bookName = req.body.bookName;
    const level = req.body.level;
    const Author = req.body.Author;
    const Description = req.body.Description;
    const ContextEn = req.body.ContextEn;
    const ContextUa = req.body.ContextUa;
    const publicationDate = req.body.publicationDate;
    const pages = req.body.pages;
    const rating = req.body.rating;
    const type = req.body.type;
    const genres = req.body.genres;

    const sqlInsert = " INSERT INTO book (bookName, level,Author, Description, ContextEn, ContextUa, publicationDate, pages, rating,type,genres ) VALUES (?,?,?,?,?,?,?,?,?,?,?) ;"
    db.query(sqlInsert, [bookName, level, Author, Description, ContextEn, ContextUa, publicationDate, pages, rating,type,genres], (err, result) => {
        console.log(result);
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})