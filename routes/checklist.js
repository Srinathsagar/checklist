const express = require("express");
const axios = require("axios");
const rules = require("../config/checllistRules");

const router = express.Router();

router.get("/evaluate", async (req, res) => {
  try {
    const apiUrl =
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
    const { data } = await axios.get(apiUrl);

    const results = rules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      passed: rule.validate(data),
    }));

    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from API." });
  }
});

module.exports = router;
