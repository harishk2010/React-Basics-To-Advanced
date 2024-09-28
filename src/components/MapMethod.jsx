import React from 'react'

// const MapMethod = () => {
//     let list=["Banner","hull","Iorn Man"]
//   return (
//     <div>
//         {
//             list.map(name=><h2>{name}</h2>)
//         }
      
//     </div>
//   )
// }

// ------or----------------
const MapMethod = () => {
    let list=["Banner","hull","Iorn Man"]
    let nameList= list.map(name=><h2>{name}</h2>)
  return <div>{nameList}</div>
}

export default MapMethod
