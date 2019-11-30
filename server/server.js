const express = require("express");
// var mongo = require("mongojs");
const mongoose = require("mongoose");

const app = express();

// let db = require("./models");

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

let PORT = process.env.PORT || 3003;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => console.log("port " + PORT));