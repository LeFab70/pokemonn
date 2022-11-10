import { Component } from "react";
import Cars from "./Cars";
import Wrapper from "./Wrapper";
const arrayOfCars = [
  { marque: "Peugeot", colors: "red" },
  { marque: "ford", colors: "pink" },
  { marque: "toyota", colors: "black" },
  { marque: "honda", colors: "blue" },
];

class MycarsArray extends Component {
  render() {
    return (
      <div>
        {/* console.log(this.props.title} */}
        <Wrapper>
          <h1>
            {" "}
            {this.props.title} {this.props.years}
          </h1>
          </Wrapper>
        {arrayOfCars.map((cars,index) => {
          // console.log(cars);
          return <Cars cars={cars} key={index}/>;
        })}
      </div>
    );
  }
}
export default MycarsArray;
