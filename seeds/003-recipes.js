
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Street Tacos', instructions: 'In a large saute pan over medium-high heat with olive oil add in 1 cup of diced onions, beef, chili powder and salt and pepper and cook until browned and cooked throughout, about 5 to 6 minutes. Keep warm and set aside. Next, place some beef in a warmed tortilla and garnish with diced onions and chopped cilantro. Serve with lime wedges.'},
        {recipe_name: 'Mushroom Risotto', instructions: 'In a saucepan, warm the broth over low heat. Warm 2 tablespoons olive oil in a large saucepan over medium-high heat. Stir in the mushrooms, and cook until soft, about 3 minutes. Remove mushrooms and their liquid, and set aside. Add 1 tablespoon olive oil to skillet, and stir in the shallots. Cook 1 minute. Add rice, stirring to coat with oil, about 2 minutes. When the rice has taken on a pale, golden color, pour in wine, stirring constantly until the wine is fully absorbed. Add 1/2 cup broth to the rice, and stir until the broth is absorbed. Continue adding broth 1/2 cup at a time, stirring continuously, until the liquid is absorbed and the rice is al dente, about 15 to 20 minutes. Remove from heat, and stir in mushrooms with their liquid, butter, chives, and parmesan. Season with salt and pepper to taste.'}
      ]);
    });
};
