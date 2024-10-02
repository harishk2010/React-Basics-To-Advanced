import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseEffectFetch = () => {

    const [post,setPost]=useState([])
    const [id,setId]=useState(1)
    const [clickId,setClickId]=useState(1)

    const handleClick=()=>{
        setClickId(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickId}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[clickId])

  return (
    <div>
        <h1>Posts</h1>
        <input type="number" value={id} onChange={(e)=>setId(e.target.value)} />
        <button onClick={handleClick}>getPost</button>
        <h4 style={{fontSize:"30px"}}>{post.title}</h4>


      
    </div>
  )
}

export default UseEffectFetch
