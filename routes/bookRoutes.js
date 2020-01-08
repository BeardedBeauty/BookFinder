// const axios = require("axios");
const Book = require('../models');

module.exports = app => {
    app.get("/all", (req, res) => {
        Book.book.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });
    app.post("/save", (req, res) => {
        console.log(req.body);
        Book.book.create(req.body).then(book => {
            res.json(book);
        }).catch(err => {
            console.log(err)
        });
    });
    app.delete("/delete", (req, res) => {
        Book.book.findById({ id: req.params.id }).then(book => book.remove()).catch(err => {
            console.log(err)
        });
    });
};