let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let Book = new Schema({
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
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

let bookke = mongoose.model("bookkes", Book);
module.exports = bookke;