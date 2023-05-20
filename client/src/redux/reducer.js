import {ALL_RECIPES, RECIPES_ID, RECIPES_NAME, CREATE_RECIPES, DIETS, FILTER, ORDER, CLEAN_DETAIL} from "./action-types"

const initialState = {
    recipesDiets: [],
    recipesDietsId: {},
    recipesDietsName: [],
    recipesDietsFilter: []
}

const reducer = (state = initialState, {type, payload}) => {

    switch(type){

        case ALL_RECIPES:
            return {
                ...state,
                recipesDiets: payload
            }

        case RECIPES_ID:
            return {
                ...state,
                recipesDietsId: payload
            }
        
        case RECIPES_NAME:
            return {
                ...state,
                recipesDietsName: payload
            }

        case FILTER:
            const allRecipesFiltered = state.recipesDiets.filter(recipe =>
                recipe.diets.includes(payload)
              );
              console.log(allRecipesFiltered);
              return {
                ...state,
                recipesDietsFilter:
                  payload === "allRecipes"
                    ? [...state.recipesDiets]
                    : allRecipesFiltered
              };
    
              case ORDER:
                const allRecipesCopy = [...state.recipesDiets];
                console.log(allRecipesCopy);
                let sortedRecipes;
              
                if (payload === "AH") {
                  sortedRecipes = allRecipesCopy.sort((a, b) => a.healthScore - b.healthScore);
                }else if (payload === "AN") {
                  sortedRecipes = allRecipesCopy.sort((a, b) => a.name.localeCompare(b.name));
                }else if (payload === "DN") {
                    sortedRecipes = allRecipesCopy.sort((a, b) => b.name.localeCompare(a.name)); 
                }else {
                  sortedRecipes = allRecipesCopy.sort((a, b) => b.healthScore - a.healthScore);
                }
              
                return {
                  ...state,
                  recipesDiets: sortedRecipes
                };

        case CLEAN_DETAIL:
            return{
                ...state,
                recipesDietsId: {}
            }
        
        default:
            return{
                ...state
            }
    }
}

export default reducer