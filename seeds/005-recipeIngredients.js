
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipeId: 1, ingredientsId: 14, quantity: '1 tbsp'},
        {recipeId: 1, ingredientsId: 6, quantity: '2 small diced'},
        {recipeId: 1, ingredientsId: 1, quantity: '1 lb'},
        {recipeId: 1, ingredientsId: 3, quantity: '1 tsp'},
        {recipeId: 1, ingredientsId: 5, quantity: '1 cup'},
        {recipeId: 1, ingredientsId: 14, quantity: '1 tbsp'},
        {recipeId: 1, ingredientsId: 9, quantity: '1 tbsp'},
        {recipeId: 1, ingredientsId: 17, quantity: '1 tbsp'},
        {recipeId: 1, ingredientsId: 7, quantity: '6'},
        {recipeId: 2, ingredientsId: 11, quantity: '6 cups'},
        {recipeId: 2, ingredientsId: 14, quantity: '3 tbsp'},
        {recipeId: 2, ingredientsId: 15, quantity: '1 lb'},
        {recipeId: 2, ingredientsId: 6, quantity: '2 diced'},
        {recipeId: 2, ingredientsId: 10, quantity: '1.5 cups'},
        {recipeId: 2, ingredientsId: 12, quantity: '1/2 cup'},
        {recipeId: 2, ingredientsId: 9, quantity: 'to taste'},
        {recipeId: 2, ingredientsId: 17, quantity: 'to taste'},
        {recipeId: 2, ingredientsId: 13, quantity: '4 tbsp'},
        {recipeId: 2, ingredientsId: 18, quantity: '1/3 cup'},
      ]);
    });
};
