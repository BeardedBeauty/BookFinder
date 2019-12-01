const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

require("./routes/bookRoutes.js")(app);

const PORT = process.env.PORT || 3003;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdb";

app.use(express.json());

const books = require('./routes/bookRoutes');
app.use('/', books);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(PORT, () => console.log("port " + PORT));