import { Component } from "react";
// import CompA from "./CompA";
// import CompB from "./CompB";
import   './App.css'
import Mycars from "./components/Mycars";
import Cars from "./components/Cars";
import MycarsArray from './components/MycarsArray'
import Message from "./components/Message";
import UserMessage from "./components/UserMessage";
import Compteur from "./components/Compteur";
import CompteurFunction from "./components/CompteurFunction";
import Logements from './reactavance/Logements'
import ListPokemon from "./pokemons/ListPokemon";
import UseState from "./graph_hooks/UseState";
import Listpokemon from "./pokemonclass/Listpokemon";
import TodoList from "./mytodoLists/Todos";
class App extends Component {
  componentDidMount() {
    document.title = "new titre";
  }
  state={titre:'Mon Catalogue des belles voitures',
          years:2022
          }
  render() {
    return ( 
      // <div className="separated">
      //   <CompA />
      //   <CompB />
      // </div>
      <div>
      {/* <Mycars/> */}
      {/* <MycarsArray title={this.state.titre} years={this.state.years} /> */}
     {/*  <Message/> */}
     {/* <UserMessage/> */}
     {/* <Compteur/>
     <CompteurFunction/> */}
    {/*  <Logements/> */}
     {/* <TodoList/> */}
    <ListPokemon/> 
    {/* <UseState/> */}
      {/* <Listpokemon/> */}
      </div>
    );
  }
}

export default App;
