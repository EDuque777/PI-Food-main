import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterRecipes, orderRecipes, dietsAll, filterRecipesDb} from "../../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../Card/Card";


const Filtered = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const recipesDb = useSelector(state => state.recipesDietsFilterDb)
    const recipes = useSelector(state => state.recipesDietsFilter)
    const recipesOrder = useSelector(state => state.recipesDiets)
    const filterDiets = useSelector(state => state.dietsRecipes)

    useEffect(() => {
        dispatch(filterRecipes());
        dispatch(filterRecipesDb())
        dispatch(orderRecipes());
        dispatch(dietsAll());
      }, [dispatch]);

    const handleFiltered = (event) => {
        dispatch(filterRecipes(event.target.value))
        navigate("/home/filter")
        console.log(event.target.value)
    };

    const handleFilteredDb = (event) => {
        dispatch(filterRecipesDb(event.target.value))
        navigate("/home/filterDb")
        console.log(event.target.value)
    };

    const handleOrder = (event) => {
        dispatch(orderRecipes(event.target.value))
        navigate("/home/order")
        console.log(event.target.value)
    }

    const dietsApi = filterDiets.filter(diet => diet.diet);
    const dietsDb = filterDiets.filter(diet => diet.name)
    console.log(recipes)

    return(

        <>
            <select onChange={handleOrder}>
            <option hidden>Order</option>
            <option disabled>Order</option>
            <option value="AH">Ascendente(HealthScore)</option>
            <option value="DH">Descendente(HealthScore)</option>
            <option value="AN">Ascendente(Name)</option>
            <option value="DN">Descendente(Name)</option>
            </select>

            <select onChange={handleFiltered}>
            <option hidden>Filter Diet API</option>
            <option disabled>Filter Diet API</option>
             {dietsApi.map(({diet, id}) => (
              <option key={id} value={diet}>{diet}</option>
            ))}
            </select>

            <select onChange={handleFilteredDb}>
            <option hidden>Filter Diet BD</option>
            <option disabled>Filter Diet DB</option>
             {dietsDb.map(({name, id}) => (
              <option key={id} value={name}>{name}</option>
            ))}
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

            { location.pathname === '/home/filterDb' && recipesDb.map(({id, name, image, summary, healthScore, steps, diets}) => {
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

            { location.pathname === '/home/order' && recipesOrder.map(({id, name, image, summary, healthScore, steps, diets}) => {
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