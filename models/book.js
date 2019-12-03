const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let Book = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    }
});

let bookke = mongoose.model("bookkes", Book);
module.exports = bookke;