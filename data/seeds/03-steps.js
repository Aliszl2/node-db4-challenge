exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipe_id: 1,
          step_number: 1,
          instructions: "Add flour into a bowl."
        },
        {
          recipe_id: 1,
          step_number: 2,
          instructions: "Mix in sugar, baking powder and salt."
        },
        {
          recipe_id: 3,
          step_number: 1,
          instructions: "Blend clean tomatoes and onions in a blender"
        },
        {
          recipe_id: 2,
          step_number: 1,
          instructions: "Boil water in a pot"
        },
        {
          recipe_id: 1,
          step_number: 3,
          instructions:
            "Make a well in the center and pour in milk, egg and melted butter. Mix until smooth."
        },
        {
          recipe_id: 2,
          step_number: 2,
          instructions:
            "Add packaged noodles into boiling water. Allow it to boil for 3 minutes."
        },
        {
          recipe_id: 2,
          step_number: 3,
          instructions:
            "Add seasoning and allow noodles to simmer for 1 - 2 minutes"
        },
        {
          recipe_id: 3,
          step_number: 2,
          instructions: "Heat oil in a saucepan and add blended mixture"
        },
        {
          recipe_id: 3,
          step_number: 3,
          instructions: "Fry for 5 - 10 minutes"
        },
        {
          recipe_id: 1,
          step_number: 4,
          instructions:
            "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake."
        },
        {
          recipe_id: 2,
          step_number: 4,
          instructions: "Garnish and serve!"
        },
        {
          recipe_id: 3,
          step_number: 4,
          instructions: "Add salt to taste"
        },
        {
          recipe_id: 3,
          step_number: 5,
          instructions: "Serve with a side dish of your choice"
        }
      ]);
    });
};
