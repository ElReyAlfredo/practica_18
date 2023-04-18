const { error } = require("console");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDb Atlas"))
  .catch((error) => console.error(error));
app.listen(port, () => console.log("server listening on port", port));
