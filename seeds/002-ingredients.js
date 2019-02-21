
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'flank steak'}, //1
        {ingredient_name: 'shredded cheese'},//2
        {ingredient_name: 'chili powder'},//3
        {ingredient_name: 'chopped tomato'},//4
        {ingredient_name: 'cilantro'},//5
        {ingredient_name: 'onion'},//6
        {ingredient_name: 'corn tortilla'},//7
        {ingredient_name: 'lime juice'},//8
        {ingredient_name: 'salt'},//9
        {ingredient_name: 'arborio rice'},//10
        {ingredient_name: 'chicken broth'},//11
        {ingredient_name: 'white wine'},//12
        {ingredient_name: 'butter'},//13
        {ingredient_name: 'olive oil'},//14
        {ingredient_name: 'portobello mushroom'},//15
        {ingredient_name: 'white mushroom'},//16
        {ingredient_name: 'black pepper'},//17
        {ingredient_name: 'parmesan cheese'},//18
      ]);
    });
};
