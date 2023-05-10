require('dotenv').config();
const axios = require("axios");
const {API_KEY, URL} = process.env;


const getRecipesName = async (req, res) => {

    try {

        const {name} = req.query;

        if(!name){
            throw Error(`Por favor ingrese un nombre`)
        }

        //const {data} = await axios(`${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`);
        const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=48f825ac985b4674927decbde47c5a2d&addRecipeInformation=true`);
        
        const matchingRecipes = data.results.filter(coincidence => coincidence.title.toLowerCase().includes(name.toLowerCase()));
        
        if (matchingRecipes.length === 0) {
            throw Error(`No hay recetas con el nombre: ${name}`)
        }
              
        return res.status(200).json(matchingRecipes);
        
    } catch (error) {
        
        res.status(404).send(error.message)

    }

}



module.exports = {
    getRecipesName
}