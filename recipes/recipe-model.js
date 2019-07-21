const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db
    .select("ingredients.id", "ingredients.ingredient", "quantity.quantity")
    .from("ingredients")
    .leftJoin("quantity", "ingredients.id", "quantity.ingredient_id")
    .leftJoin("recipes", "recipes.id", "quantity.recipe_id")
    .where("recipes.id", recipe_id);
}

function getInstructions(recipe_id) {
  return db
    .select("steps.id", "steps.step_number", "steps.instructions")
    .from("steps")
    .leftJoin("recipes", "recipes.id", "steps.recipe_id")
    .where("recipes.id", recipe_id)
    .orderBy("steps.step_number", "asc");
}
