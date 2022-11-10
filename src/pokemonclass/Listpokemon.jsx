import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import { config } from "./config/Config";


export default function Listpokemon(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    document.title = "Liste des pokemons";
    axios.get(config.SERVER).then((response) => {
      setPokemons(response.data.results);
    });
  });
  return (
    <>
      <div className="flex   flex-wrap gap-3 gap-y-5 mx-auto justify-center items-center">
        {pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={index} position={index + 1} />
        ))}
      </div>
    </>
  );
}
