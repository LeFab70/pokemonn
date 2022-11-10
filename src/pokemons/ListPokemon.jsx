import { Component } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import { config } from "./config/Config";

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [], searchPokemon: "" };
    //this.handleChange= this.handleChange.bind(this)
  }
  componentDidMount() {
    axios.get(config.SERVER).then((response) => {
      this.setState({ pokemons: response.data.results });
      //console.log(this.state);
    });
  }
  handleChange = (e) => {
    this.setState({ searchPokemon: e.target.value });
    //console.log(this.state.searchPokemon);
  };

  /* TAF/objectifs*/
  //inclure la pagination react pour une longue liste

  render() {
    return (
      <div>
        <div className="flex space-x-0 items-center justify-center my-10">
          <h1 className="px-2   text-gray-900 uppercase">
            Liste des pokemons (
            {
              this.state.pokemons.filter((pokemon) =>
                pokemon.name
                  .toLowerCase()
                  .includes(this.state.searchPokemon.toLowerCase())
              ).length
            }
            )
          </h1>
     
        {/* <input
            type="text"
            placeholder="find a pokemon..."
            className=" w-[350px] h-9 border-2 ring-1 py-2 px-3 placeholder:text-gray-200 rounded-lg "
            
          /> */}
        {/* <div style="max-width:700px; margin: 100px auto;"> */}

        <form className="flex items-center">
          <label for="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                ariaHidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voiceSearch"
              className=" rounded-md  bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block sm:min-w-[500px] w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search pokemons..."
              required=""
              onChange={this.handleChange}
            />
            <button
              type="button"
              className="flex absolute inset-y-0 right-0 items-center pr-3"
            >
              <svg
                ariaHidden="true"
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            type="submit"
            onClick={this.handleChange}
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
          >
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </form>
        </div>
        <div className="flex  flex-wrap gap-3 gap-y-5 mx-auto justify-center items-center">
          {this.state.pokemons
            .filter((pokemon) =>
              pokemon.name
                .toLowerCase()
                .includes(this.state.searchPokemon.toLowerCase())
            )
            .map((pokemon, index) => (
              <Pokemon pokemon={pokemon} key={index} position={index + 1} />
            ))}
        </div>
      </div>
    );
  }
}
export default ListPokemon;
