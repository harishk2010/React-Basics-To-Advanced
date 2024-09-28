import React from 'react'

const CondtionalRendering = () => {
  let logged=true

  //----if else-------
//   if(logged){
//     return <h1>Hello if</h1>
//   }else{
//     return <h1>Hello else</h1>
//   }

/////////////////////////////////////

    //------element variable--------
    // let message
    // if(logged){
    //     message=<h1>hello if message</h1>
    // }else{
    //     message=<h1>Hello else message</h1>
    // }
    // return <div>{message}</div>
    
    /////////////////////////////////////

/// ------------Ternary Operator---------
// return(
//     <div>
//         {
//             logged?<h1>Hello sir</h1>:<h2>Bye sir</h2>

//         }
//     </div>
// )
    /////////////////////////////////////

    // --------------short circuit operator--------------------
return(
    <div>
         { logged && <h1>Hello && </h1> }

    </div>
   
)

    /////////////////////////////////////



 
}

export default CondtionalRendering
