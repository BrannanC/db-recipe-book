const express = require('express');
const helmet = require('helmet');

const db = require('./data/recipeBookHelpers');

const server = express();

server.use(express.json());
server.use(helmet());

// Dishes
server.get('/api/dishes', (req, res) => {
    db.getDishes()
        .then(dishes => {
            res.status(200).json({ dishes })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get dishes' })
        })
});

server.get('/api/dishes/:id', (req, res) => {
    db.getDishRecipes(req.params.id)
        .then(recipes => {
            res.status(200).json({ recipes })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get dish' })
        })
});

server.post('/api/dishes', (req, res) => {
    const dish = req.body;
    if(!dish.dish_name){
        res.status(400).json({ error: 'Dish needs a name'})
    } else {
        db.addDish(dish)
        .then(id => {
            res.status(201).json({ id: id[0] })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add dish' })
        })
    }
});



// Recipes
server.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.status(200).json({ recipes })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get recipes' })
        })
});

server.get('/api/recipes/:id', (req, res) => {
    const id = req.params.id
    db.getRecipe(id)
        .then(recipe => {
            db.getRecipeIngredients(id)
            .then(ingredients => {
                res.status(200).json({ ...recipe, ingredients })
            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get dish' })
        })
});

server.post('/api/dishes/:id', (req, res) => {
    const recipe = req.body;
    if(!recipe.recipe_name || !recipe.instructions){
        res.status(400).json({ error: 'Recipe needs a name, ingredients and instructions', body: req.body })
    } else {
        db.addRecipe(recipe)
        .then(id => {
            const recipeId = id[0];
            const ingredients = recipe.ingredients;
           Promise.all(ingredients.map(x => db.addRecipeIngredients(x.ingredientsId, recipeId, x.quantity))).then(stuff => {
                db.addDishRecipes(id[0], req.params.id)
                .then(id => {
                        res.status(201).json({ id, dishId: req.params.id, recipeId })
                })
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not add recipe', recipe})
        })
    }
});


//GET Ingredients
server.get('/api/ingredients', (req, res) => {
    db.getIngredients()
        .then(ingredients => {
            res.status(200).json({ ingredients })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Could not get ingredients' })
        })
});

const port = process.env.PORT || 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});