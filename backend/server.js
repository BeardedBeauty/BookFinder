const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3003;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));

require("./routes/bookRoutes.js")(app);

app.listen(PORT, () => console.log("port " + PORT));