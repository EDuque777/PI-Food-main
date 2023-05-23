require('dotenv').config();
const axios = require("axios");
const {Diet} = require("../db")
const {API_KEY, URL} = process.env;


const getDiets = async (req, res) => {
    try {

      let diets = await Diet.findAll();

      if (diets.length === 0) {

         const { data } = await axios.get(
           `${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
            //`https://api.spoonacular.com/recipes/complexSearch?apiKey=48f825ac985b4674927decbde47c5a2d&addRecipeInformation=true`
       );
        //const {data} = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d25d273ecba24220a41a201eb4be11b6&addRecipeInformation=true`)
        //const {data} = await axios("https://api.spoonacular.com/recipes/complexSearch?apiKey=c8fb3c57a8c247d7902bc6e2da834e24&addRecipeInformation=true") 

        // let idCounter = 0;
        // dietsApi = [...new Set(data.results.flatMap((diet) => diet.diets))]
        // .map((diet) => ({ id: idCounter++, diet, api: true }));

        // diets = [...new Set(data.results
        //   .map((result) => result.diets)
        //   .flat()
        //   .filter((diet) => diet.origin && diet.origin === 'post')
        // )];

        diets = [...new Set(data.results.map((result) => result.diets).flat())];
        
        await Promise.all(
          diets.map(async (diet) => {
            await Diet.create({ name: diet });
          })
        );
        diets = await Diet.findAll();
      }

      const combinedDiets = [...diets];
      return res.status(200).json(combinedDiets)

    } catch (error) {

        res.status(404).send(error.message);

    }
  };



module.exports = {
    getDiets
}