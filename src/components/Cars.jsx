// const Cars=(props) => {
//      console.log(props);
//  const colorsOfCars=props.colors?( <p>Couleur:{props.colors}</p>):(<p>Couleur:neant</p>)
//         return (
//             <div style={{backgroundColor:'pink',width:'300px',height:'100px',margin:'10px auto',padding:'10px'}}>
//                 <p>Marque:{props.children}</p>
//                  {colorsOfCars}
//             </div>
//         );

// }

import Wrapper from "./Wrapper";
const Cars = ({ cars }) => {
  //console.log(marque,colors);
  const colorsOfCars = cars.colors ? (
    <p>Couleur:{cars.colors}</p>
  ) : (
    <p>Couleur:neant</p>
  );
  return (
    <>
      <Wrapper>
        <p>Marque voiture:{cars.marque}</p>
        {colorsOfCars}
      </Wrapper>
    </>
  );
};

export default Cars;
