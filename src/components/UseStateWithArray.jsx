import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [list,setList]=useState([])
    const addValInList=()=>{
        setList([...list,Math.floor(Math.random()*10)+1])
    }
  return (
    <div>
        <button onClick={addValInList}>add</button>
        <ul>
        {
            list.map((val,index)=><p key={index}>{val}</p>)
        }

        </ul>
        
      
    </div>
  )
}

export default UseStateWithArray
