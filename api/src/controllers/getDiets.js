require('dotenv').config();
const axios = require("axios");
const {Diet} = require("../db")
const {API_KEY, URL} = process.env;



const getDiets = async (req, res) => {
    try {

      let diets = await Diet.findAll({ attributes: ['name'] });

      if (diets.length === 0) {

        const { data } = await axios.get(
          `${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
          // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
          // `https://api.spoonacular.com/recipes/complexSearch?apiKey=48f825ac985b4674927decbde47c5a2d&addRecipeInformation=true`
        );

        diets = [...new Set(data.results.map((result) => result.diets).flat())];
        
        await Promise.all(
          diets.map(async (diet) => {
            await Diet.create({ name: diet });
          })
        );

        diets = await Diet.findAll({ attributes: ['name'] });

      }

      return res.status(200).json(diets)

    } catch (error) {

        res.status(404).send(error.message);

    }
  };



module.exports = {
    getDiets
}