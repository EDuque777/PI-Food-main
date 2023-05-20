import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterRecipes, orderRecipes } from "../../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../Card/Card";


const Filtered = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const recipes = useSelector(state => state.recipesDietsFilter)
    useEffect(() => dispatch(filterRecipes()), [dispatch])
    useEffect(() => dispatch(orderRecipes()), [dispatch])

    const handleFiltered = (event) => {
        dispatch(filterRecipes(event.target.value))
        navigate("/home/filter")
        console.log(event.target.value)
    };


    const handleOrder = (event) => {
        dispatch(orderRecipes(event.target.value))
        console.log(event.target.value)
    }

    return(

        <>

            <select onChange={handleOrder}>
            <option value="AH">Ascendente(HealthScore)</option>
            <option value="DH">Descendente(HealthScore)</option>
            <option value="AN">Ascendente(Name)</option>
            <option value="DN">Descendente(Name)</option>
            </select>

            <select onChange={handleFiltered}>
            <option value="allRecipes">All Recipes</option>
            <option value="gluten free">Gluten Free</option>
            <option value="dairy free">Dairy Free</option>
            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            </select>

            { location.pathname === '/home/filter' && recipes.map(({id, name, image, summary, healthScore, steps, diets}) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     image={image}
                     summary={summary}
                     healthScore={healthScore}
                     steps={steps}
                     diets={diets.join(", ")}
                  />
               )
            })
          }
        </>
    )
}

export default Filtered