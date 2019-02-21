
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).unique().notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
        tbl.text('instructions').notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};