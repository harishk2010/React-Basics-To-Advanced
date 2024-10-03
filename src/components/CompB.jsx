import React from 'react'
import { userContext } from './Context'

const CompB = () => {
  return (
    <div>
        {
            <userContext.Consumer>
                {value=><h1>user name is {value}</h1>}
            </userContext.Consumer>
            
        }
      
    </div>
  )
}

export default CompB
