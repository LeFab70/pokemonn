import { Component } from "react";
class Compteur extends Component{
   constructor()
    {
        super()
        this.state={compteur:5}

    }
   
   handleClick=()=>{
    return this.setState({compteur:this.state.compteur+1});
   }
 

    render(){
        return(
            <div>
                <h1>{this.state.compteur}</h1>
                <button onClick={this.handleClick}>incrementer</button>
            </div>
        )
    }
}
export default Compteur