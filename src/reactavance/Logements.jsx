import { Component } from "react";
import Logement from "./Logement";

class Logements extends Component {
  render() {
    return (
      <div>
        hello Logements pour tous
    
       <Logement maison='1' chambre='4' douche='2' cuisine='01'/>
       <Logement douche='1'/>
        

       <h1 className="text-3xl font-bold  bg-red-100 mx-auto text-center p-3 text-gray-700">
      Hello world!
    </h1>
      </div>
    );
  }
}
export default Logements;
