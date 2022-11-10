import {useState} from 'react'

const UseState= () => {
    const [count,setCount]=useState(0)
    const handleClick=(e)=>{
        e.preventDefault()
        setCount(count=>count+1)
    }
  return (
    <>
      <button onClick={handleClick} className=' bg-slate-400 rounded-sm mx-auto mt-4 py-2 px-2'>nombre{count}</button>
    </>
  )
}

export default UseState
