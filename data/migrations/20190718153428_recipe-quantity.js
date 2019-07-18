exports.up = function(knex) {
  return knex.schema.createTable("quantity", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
    tbl.float("quantity", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("quantity");
};
