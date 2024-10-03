import React, { useContext } from 'react'
import CompB from './CompB'
import { userContext } from './Context'

const CompA = () => {
    const user=useContext(userContext)
  return (
    <div>
        <h1>Component A {user}</h1>
        <CompB/>
      
    </div>
  )
}

export default CompA
