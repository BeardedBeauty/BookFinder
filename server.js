const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const app = express();
const path = require("path");
// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 3003;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));

require("./routes/bookRoutes.js")(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log("port " + PORT));