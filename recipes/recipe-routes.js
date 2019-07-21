const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

router.get("/recipes/:id/shoppingList", async (req, res) => {
  try {
    const { id } = req.params;
    const list = await Recipes.getShoppingList(id);
    res.json(list);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get ingredients and quantites for this recipe"
    });
  }
});

router.get("/ingredients/:id/recipes", async (req, res) => {
  try {
    const { id } = req.params;
    const steps = await Recipes.getInstructions(id);
    res.json(steps);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get steps for this recipe"
    });
  }
});

module.exports = router;
