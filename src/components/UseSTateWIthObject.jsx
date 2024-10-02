import React, { useState } from 'react'

const UseSTateWIthObject = () => {

    const [name,setName]=useState({firstNme:"",lastName:""})
  return (
    <div>
        <input type="text" value={name.firstNme} onChange={(e)=>setName({...name,firstNme:e.target.value})} />
        <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} />
        <h1>{JSON.stringify(name)}</h1>
      
    </div>
  )
}
///always spread the previous inputs

export default UseSTateWIthObject
