import {ALL_RECIPES, RECIPES_ID, RECIPES_NAME, CREATE_RECIPES, DIETS, FILTER, ORDER, CLEAN_DETAIL} from "./action-types"
import axios from "axios";


export const allRecipes = () => {
    const endpoint = 'http://localhost:3001/recipes';
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: ALL_RECIPES,
            payload: data
        })
    }
}


export const recipesId = (id) => {
    const endpoint = `http://localhost:3001/recipes/${id}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: RECIPES_ID,
            payload: data
        })
    }
}


export const recipesName = (name) => {
    const endpoint = `http://localhost:3001/recipesName?name=${name}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: RECIPES_NAME,
            payload: data
        })
    }
}


export const createRecipes = (create) => {
    const endpoint = 'http://localhost:3001/recipes';
    return async (dispatch) => {
        const {data} = await axios.post(endpoint, create);
        return dispatch({
            type: CREATE_RECIPES,
            payload: data
        })
    }
}


export const diest = () => {
    const endpoint = `http://localhost:3001/diets`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: DIETS,
            payload: data
        })
    }
}


export const filterRecipes = (value) => {
    return {type: FILTER, payload: value}
}

export const orderRecipes = (value) => {
    return {type: ORDER, payload: value}
}


export const cleanDetail = () => {

    return {type: CLEAN_DETAIL}

}