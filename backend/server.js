const express = require("express");
// var mongo = require("mongojs");
const mongoose = require("mongoose");

const app = express();

let PORT = process.env.PORT || 3003;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const books = require('./routes/bookRoutes');
app.use('/book', books);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => console.log("port " + PORT));