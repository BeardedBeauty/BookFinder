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
            // res.json(err);
            console.log(err)
        });
    });
}
// router.route('/').get((req, res) => {
//     Book.find()
//         .then(books => res.json(books))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/save').post((req, res) => {
//     const newbook = req.body.book;

//     const saveBook = new Book({ newbook });

//     saveBook.save()
//         .then(() => res.json('added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });