const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {getRecipesId} = require("../controllers/getRecipesId")
const {getRecipesName} = require("../controllers/getRecipesName");
const {postRecipes} = require("../controllers/postRecipes")
const {getDiets} = require("../controllers/getDiets")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:idRecipe", (req, res) => {

    getRecipesId(req, res)

})


router.get("/recipes", (req, res) => {

    getRecipesName(req, res);

})


router.post("/recipes", (req, res) => {

    postRecipes(req, res);

})


router.get("/diets", (req, res) => {

    getDiets(req, res);

})


module.exports = router;
