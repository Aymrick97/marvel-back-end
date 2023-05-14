const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics/characterId", async (req, res) => {
  try {
    let { Id } = req.query;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${Id}?apiKey=${process.env.API_KEY}
 `
    );
    res.status(200).json(response.data);
  } catch (error) {}
});
module.exports = router;
