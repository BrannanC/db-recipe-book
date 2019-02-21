exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', tbl => {
        tbl.increments();
        tbl.integer('ingredientsId').unsigned().references('id').inTable('ingredients')
          .onDelete('CASCADE').onUpdate('CASCADE').notNullable();
        tbl.integer('recipeId').unsigned().references('id').inTable('recipes')
          .onDelete('CASCADE').onUpdate('CASCADE').notNullable();
        tbl.string('quantity', 50).notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients');
};
