require('dotenv').config();
const axios = require("axios");
const {API_KEY, URL} = process.env;


const getRecipesName = async (req, res) => {

    try {
        const {name} = req.query;

        if(!name){
            return res.status(400).send(`Parametro incorrecto`)
        }

        const {data} = await axios(`${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        // const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=48f825ac985b4674927decbde47c5a2d&addRecipeInformation=true`);
        
        const matchingRecipes = data.results.filter(coincidence => coincidence.title.toLowerCase().includes(name.toLowerCase()));
        
        if (matchingRecipes.length === 0) {
            return res.status(400).send(`No hay recetas con el nombre: ${name}`)
        }
        
        const specificRecipe = matchingRecipes.map(recipe => {
            return {
              id: recipe.id,
              name: recipe.title,
              image: recipe.image,
              summary: recipe.summary.replace(/<[^>]*>/g, ''),
              healthScore: recipe.healthScore,
              steps: recipe.analyzedInstructions[0].steps.map(step => step.step),
              diets: recipe.diets
            }
        })
              
        return res.status(200).json(specificRecipe);
        
    } catch (error) {
        
        res.status(404).send(error.message)

    }

}



module.exports = {
    getRecipesName
}