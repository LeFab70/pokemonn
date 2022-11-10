import React from 'react'

function Wrapper({children}) {
  return (
    <>
      <div style={{backgroundColor:'pink',width:'300px',height:'100px',margin:'10px auto',padding:'10px'}}>
      {children}
      </div>
    </>
  )
}

export default Wrapper
