const express = require("express");

const api = require("./api.js");

const app = express.Router();

app.get("/", (req, res) => {
  api.getAllFoods((result) => {
    res.json(result);
  });
});

app.post("/", (req, res) => {
  if (!req.body.name || !req.body.calories || !req.body.description) {
    response.json({ error: true });
  } else {
    api.createNewFood(req.body, (result) => {
      res.json(result);
    });
  }
});

module.exports = app;
