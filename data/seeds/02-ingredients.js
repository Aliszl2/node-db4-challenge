exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "Flour" },
        { ingredient: "Eggs" },
        { ingredient: "Sugar" },
        { ingredient: "Salt" },
        { ingredient: "Baking powder" },
        { ingredient: "Butter" },
        { ingredient: "Tomato" },
        { ingredient: "Onion" },
        { ingredient: "Water" },
        { ingredient: "Noodles" },
        { ingredient: "Milk" }
      ]);
    });
};
