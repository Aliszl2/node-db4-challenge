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

router.get("/:id/shoppingList", async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await Recipes.getShoppingList(id);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get ingredients and quantites for this recipe" });
  }
});

module.exports = router;
