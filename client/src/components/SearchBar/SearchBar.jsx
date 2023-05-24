import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    setErrorMessage(""); // Limpiar el mensaje de error cuando se ingrese texto en el input
  };

  const handleSearch = () => {
    if (name === "") {
      setErrorMessage("Por favor ingresar el nombre de la receta");
    } else {
      onSearch(name);
      setName("");
    }
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={name} />
      <button onClick={handleSearch}>Buscar</button>
      {errorMessage && <p>{errorMessage}</p>} {/* Mostrar el mensaje de error si existe */}
    </div>
  );
}