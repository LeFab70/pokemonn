import { Component } from "react";

class UserMessage extends Component {
  constructor() {
    super();
    this.state = {
      nameUser: "votre nom ici",
    };
  }
  // preventSubmit(Event){
  //   Event.preventDefault()
  // }
  dispayName() {
    //this.setState({ nameUser:document.getElementById('user')});
    this.setState({nameUser:`Hello and welcome ${document.getElementById('user').value}`});
  }
  render() {
    return (
      <div>
       {/*  <form onSubmit={()=>this.preventSubmit(Event)}> */}
          <input type="text" name="user" id="user" />
          <button
            onClick={() => {
              this.dispayName();
            }}
          >
            Your name
          </button>
       {/*  </form> */}
        <p>{this.state.nameUser}</p>
      </div>
    );
  }
}
export default UserMessage;
