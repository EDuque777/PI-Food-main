const {Recipe, Diet}= require("../db");


const postRecipes = async (req, res) => {

    try {

        const {name, image, resumen_plato, health_score, paso_a_paso, diet} = req.body;
        

        if(!name || !image || !resumen_plato || !health_score || !paso_a_paso || !diet){
            throw Error("Faltan datos por completar");
        }

        const createRecipe = await Recipe.create({name, image, resumen_plato, health_score, paso_a_paso})
    
        // if (diet.length) {
        //     for (let i = 0; i < diet.length; i++) {
        //         const dietInstance = await Diet.findOrCreate({
        //             where: { name: diet },
        //         });
        //         await createRecipe.addDiet(dietInstance[0]);
        //     }
        // }

        const dietsArray = diet.split(", ");

        
        for (let i = 0; i < dietsArray.length; i++) {
          const dietInstance = await Diet.findOrCreate({ where: { name: dietsArray[i] } });
          await createRecipe.addDiet(dietInstance[0]);
        }

        return res.status(201).json(createRecipe)

    } catch (error) {
        
        res.status(404).send(error.message)

    }

}



module.exports = {
    postRecipes
}