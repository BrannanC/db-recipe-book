const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    getDishRecipes,
    getRecipes,
    getRecipe,
    getIngredients,
    getRecipeIngredients,
    addDish,
    addRecipe,
    addDishRecipes,
    addRecipeIngredients
};


function getDishes() {
    return db('dishes');
}

function addDish(dish){
    return db('dishes').insert(dish);
}

function getDishRecipes(id) {
    return db('dishRecipes')
    .join('dishes', 'dishRecipes.dishId', 'dishes.id')
    .join('recipes', 'dishRecipes.recipeId', '=', 'recipes.id')
    .where('dishRecipes.dishId', '=', id)
    .select('dishes.dish_name', 'recipes.recipe_name', 'dishRecipes.recipeId')
}

function getRecipes(id){
    return db('recipes');
}

function getRecipe(id){
    return db('recipes').where('recipes.id', '=', id).first();
}

function getRecipeIngredients(id){
    return db('recipeIngredients')
        .where('recipeIngredients.recipeId', id)
        .join('ingredients', 'recipeIngredients.ingredientsId', 'ingredients.id')
}

function addRecipe(recipe){
    return db('recipes').insert({ recipe_name: recipe["recipe_name"], instructions: recipe.instructions});
}

function addDishRecipes(recipeId, dishId){
    return db('dishRecipes').insert({ recipeId, dishId });
}

function addRecipeIngredients(ingredientsId, recipeId, quantity){
    return db('recipeIngredients').insert({ ingredientsId, recipeId, quantity });
}

function getIngredients() {
    return db('ingredients');
}