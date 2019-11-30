const router = require('express').Router();
let Book = require('../models');

router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/save').post((req, res) => {
    const newbook = req.body.book;

    const saveBook = new Book({ newbook });

    saveBook.save()
        .then(() => res.json('added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});