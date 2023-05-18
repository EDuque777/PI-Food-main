import {ALL_RECIPES, RECIPES_ID, RECIPES_NAME, CREATE_RECIPES, DIETS, CLEAN_DETAIL} from "./action-types"

const initialState = {
    recipesDiets: [],
    recipesDietsId: {},
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
                recipesDiets: payload
            }

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