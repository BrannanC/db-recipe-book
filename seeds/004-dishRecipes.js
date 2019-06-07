
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishRecipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishRecipes').insert([
        {dishId: 1, recipeId: 1},
        {dishId: 4, recipeId: 2}
      ]);
    });
};
