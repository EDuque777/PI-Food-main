import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { recipesName, cleanDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

 const Nav = () => {

    const dispatch = useDispatch();
    const { name } = useParams();

    useEffect(() => {
        if(name){
        dispatch(recipesName(name))
    }
        return () => dispatch(cleanDetail())
    }, [])

    const handleSearch = (searchQuery) => {
        dispatch(recipesName(searchQuery))
      };

    return(

        <div>

            <SearchBar onSearch={handleSearch}/>

        </div>
        
    )

}

export default Nav;