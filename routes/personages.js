const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/personage", async (req, res) => {
  try {
    let { name, skip, limit } = req.query;

    name = name || "";
    skip = skip || "0";
    limit = limit || "100";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
