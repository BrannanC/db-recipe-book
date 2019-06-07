
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Taco'},
        {dish_name: 'Meatloaf'},
        {dish_name: 'Apple Pie'},
        {dish_name: 'Risotto'}
      ]);
    });
};
