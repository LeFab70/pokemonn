import { Component } from "react";
class Message extends Component{
   constructor(){
    super()
    this.state={
    message:'click to subscribe to chanel'
   }
     }
  onChangeMessage(){
     this.setState({
        message:'thanks for subscribe'
     })
     
    }
 render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.onChangeMessage()}>suscribe</button>
        </div>
    )
 }

}
export default Message