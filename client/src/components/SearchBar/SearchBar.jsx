import { useState } from "react";


export default function SearchBar({onSearch}) {

    const [name, setName] = useState("");

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (

      <div>

         <input type='search' onChange={handleChange} value={name} />

         <button onClick={() => {onSearch(name); setName("")}}>Buscar</button>

      </div>


   );

}
