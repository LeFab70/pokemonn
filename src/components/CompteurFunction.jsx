import { useState, useRef } from "react";
export default function CompteurFunction() {
  const [compteur, setcompteur] = useState(3);
  const handleClick = () => {
    setcompteur(compteur + 1);
  };
  const tableau = [1, 2, 4, 5, 6, 7];
  const [fruits, setfruits] = useState([
    {
      id: 1,
      name: "papaye",
    },

    {
      id: 2,
      name: "orange",
    },
    {
      id: 3,
      name: "pamplemouse",
    },
    {
      id: 4,
      name: "citron",
    },
  ]);
  const [newFruit,setNewFruit]=useState('')
  const inputRef = useRef();
  const handleAdd = (id) => {
    //fruit=document.getElementById('fruit')
    //console.log(fruit.value);
    //setfruits(fruits.push({id:10,name:fruit.value}))
  };

  // lorsque la fonction prends un parametr nest pas oublier lors de lappel de passer en fonction flechee
  const handleDelete = (id) => {
    //console.log(id);
    //copie du state
    const fruitsCopy = fruits.slice(); //ou =[...fruits]
    // action sur la copie
    const fruitsCopyUpdate = fruitsCopy.filter((fruit) => fruit.id !== id);
    // maj du state
    setfruits(fruitsCopyUpdate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    const fruitsCopy=[...fruits]
    const id=new Date().getTime()
    const name=newFruit
    fruitsCopy.push({id,name})
    setfruits(fruitsCopy)
    setNewFruit('')
    console.log(fruits);
  };
  const handleChange=(event)=>{
    console.log(event.target.value);
    setNewFruit(event.target.value)
  }
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Add</button>
      {tableau}
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name}

              <button onClick={() => handleDelete(fruit.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          id="fruit"
          placeholder="Add fruit...."
          ref={inputRef}
          value={newFruit}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>AddFruit</button>
      </form>
    </div>
  );
}
