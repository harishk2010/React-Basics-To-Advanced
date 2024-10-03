import React, { useReducer } from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'Inc':
            return state+1
        case 'Dec':
            return state-1
        case "Reset":
            return initialState    
    }

}

const Test = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>Count -{state}</h1>
        <button onClick={()=>dispatch("Inc")}>Increment</button>
        <button onClick={()=>dispatch("Dec")}>decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
      
    </div>
  )
}

export default Test
