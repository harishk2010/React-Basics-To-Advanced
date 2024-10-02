import React, { useState } from 'react'

const UseSTateWIthPrev = () => {
    const initialCount=0
    const [count , setCount]=useState(initialCount)
    const incrementbyfive=()=>{
        setCount(prevCount=>prevCount+5)
    }
  return (
    <div>
        <h1>Use State with Previous Value</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decerement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={incrementbyfive}>+ five</button>
      
    </div>
  )
}

export default UseSTateWIthPrev
