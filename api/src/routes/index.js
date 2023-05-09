const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {getRecipesId} = require("../controllers/getRecipesId")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:idRecipe", (req, res) => {

    getRecipesId(req, res)

})


module.exports = router;
