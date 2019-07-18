const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

module.exports = router;
