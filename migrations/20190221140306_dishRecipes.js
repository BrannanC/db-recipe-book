
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishRecipes', tbl => {
        tbl.increments();
        tbl.integer('dishId').unsigned().references('id').inTable('dishes')
          .onDelete('CASCADE').onUpdate('CASCADE').notNullable();
        tbl.integer('recipeId').unsigned().references('id').inTable('recipes')
          .onDelete('CASCADE').onUpdate('CASCADE').notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishRecipes');
};
