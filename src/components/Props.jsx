import React from 'react'

const Props = (props) => {
    // const {name}=props           //another way to destructure a prop
  return (
    <div>
        <h1>Hello i am a {props.name}</h1>
        {props.children}
      
    </div>
  )
}

export default Props
