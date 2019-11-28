let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let Book = new Schema {

}
let bookke = mongoose.model("bookkes", Book);
module.exports = bookke;