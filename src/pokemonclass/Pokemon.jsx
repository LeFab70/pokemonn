
import { useState, useEffect } from "react"
import axios from "axios"

export default function Pokemon({pokemon}) {
  const [image, setImage]=useState('')

  useEffect(() => {
    document.title = "liste des pokemons";
    document.body.className = "bg-gray-50";

    axios.get(pokemon.url).then((response) => {
      setImage(response.data.sprites.other.dream_world.front_default,
      );
      console.log(response.data);
    });
  });
  return (
    <>
      <div className=" group relative flex flex-col items-stretch rounded-lg min-w-[350px] h-[250px] py-2 px-4 ring-1 border-1 border-gray-200  nx-auto  shadow-lg shadow-zinc-400  w-fit">
        <h1 className=" absolute top-2 text-2xl right-3 bg-amber-400 rounded-full w-fit text-gray-100 font-bold p-2">
          <span>0{pokemon.position}</span>{" "}
        </h1>
        <img
          src={image}
          alt="pokemon"
          className="group-hover:animate-pulse w-40 h-40 group-hover:translate-x-2 transition-transform ease-in-out delay-150"
        />
        <h1 className="flex h-full  items-end  justify-end">
          {/* <div className="flex -space-x-1 overflow-hidden">
  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={this.state.image} alt=""/>
  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={this.state.image} alt=""/>
  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={this.state.image} alt=""/>

           </div> */}
           
          <button className="min-w-1/2 font-extrabold text-xl mt-auto bg-blue-700 rounded-md text-gray-200 py-2  px-4 mb-3 hover:bg--400 w-fit capitalize">
            {" "}
            {pokemon.name}
          </button>
        </h1>
      </div>
    </>
  );
}
