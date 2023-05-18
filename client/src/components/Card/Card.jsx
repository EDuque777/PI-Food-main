import { Link } from "react-router-dom";

export default function Card({ id, name, image, diets }) {
   return (
      <div>
         <Link to={`/deatil/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <img src={image} alt='' />
         <h2>diets: {diets}</h2>
      </div>
   );
}

