import React, { useCallback, useState } from 'react'
import ButtonA from './ButtonA'
import ButtonB from './ButtonB'

const Memos = () => {
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)

    

    const incrementA=useCallback(()=>{
        console.log("function A called")
        setCountA(countA+1)
      

    },[countA])
    // const incrementA=()=>{
    //     console.log("function A called")
    //     setCountA(countA+1)
      

    // }
    const incrementB=useCallback(()=>{
        console.log("function B called")

        setCountB(countB+1)
        
        },[countB])
    // const incrementB=()=>{
    //     console.log("function B called")

    //     setCountB(countB+1)
        
    //     }
  return (
    <div>
        <h1>Memos</h1>
        <ButtonA incrementA={incrementA} countA={countA}/>
        <ButtonB incrementB={incrementB} countB={countB}/>
      
    </div>
  )
}

export default Memos
