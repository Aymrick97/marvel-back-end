require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const persoRoute = require("./routes/personages");
const comicsRoute = require("./routes/comics");
const persoId = require("./routes/persoId");

app.use(persoRoute);
app.use(comicsRoute);
app.use(persoId);

app.get("/", (req, res) => {});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route doesn't exist" });
});

app.listen(3000, () => {
  console.log("server started 🚀");
});
