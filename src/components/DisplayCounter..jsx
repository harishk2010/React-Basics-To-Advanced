import React, { useContext } from 'react'
import { counterCountext } from './Simple'


const DisplayCounter = () => {
    const {increment ,decrement , count}=useContext(counterCountext)
    // const {decrement }=useContext(counterCountext)
    // const {count }=useContext(counterCountext)
  return (
    <div>
        <h1>Count-{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}> decrement</button>
      
    </div>
  )
}

export default DisplayCounter
