import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { recipesId, cleanDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function Deatil(){

    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipesDietsId)
    const { id } = useParams();

    useEffect(() => {
        dispatch(recipesId(id))
        return () => dispatch(cleanDetail())
    }, [id, dispatch])
    console.log(recipes)

    const diets = recipes.diets ? recipes.diets.join(", ") : ""

    if (!recipes.name) {
        return <div>Loading...</div>; 
      }

    return(
        <div>
            <h2>Name: {recipes.name}</h2>
            <img src={recipes.image} alt='' />
            <h2>Summary: {recipes.summary}</h2>
            <h2>HealthScore: {recipes.healthScore}</h2>
            <h2>Steps: {recipes.steps}</h2>
            <h2>Diets: {diets}</h2>
        </div>
    )
}