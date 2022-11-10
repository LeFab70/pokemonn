import { Component } from "react";


class Logement extends Component{
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>

        <ul style={{width:'200px',backgroundColor:'pink',padding:'20px',margin:'20px'}}>
          <li>{this.props.maison}maison</li>
          <li>{this.props.chambre}chambre</li>
          <li>{this.props.douche}douche</li>
          <li>{this.props.cuisine}cuisine</li>
        </ul>
        
      </div>
    );
  }
}
export default Logement;
