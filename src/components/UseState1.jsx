import React, { useState } from 'react'

const UseState1 = () => {
    const [count,setCount]=useState(0)

  return (
    <div>
        <h1>useState Hook</h1>
        <button onClick={()=>setCount(count+1)}>{count}</button>
      
    </div>
  )
}

export default UseState1
