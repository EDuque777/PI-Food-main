require('dotenv').config();
const axios = require("axios");
const {API_KEY, URL} = process.env;


const getRecipesId = async (req, res) => {

    try {
        
        const {idRecipe} = req.params;
        //const {data} = await axios(`${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
        const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=48f825ac985b4674927decbde47c5a2d&addRecipeInformation=true`);
        // console.log(data.results[0].id)
        const filteredRecipe = data.results.find(diet => diet.id === +idRecipe)

        //console.log(filteredRecipe)

        if(!filteredRecipe){
            throw Error(`No hay recetas con el id: ${idRecipe}`)
        }

        const associatedDiet = {
            id: filteredRecipe.id,
            vegetarian: filteredRecipe.vegetarian,
            vegan: filteredRecipe.vegan,
            glutenFree: filteredRecipe.glutenFree,
            dairyFree: filteredRecipe.dairyFree,
            veryHealthy: filteredRecipe.veryHealthy,
            diets: filteredRecipe.diets
        }

        return res.status(200).json(associatedDiet)

    } catch (error) {
        
        res.status(404).send(error.message)

    }

}


module.exports = {
    getRecipesId
}