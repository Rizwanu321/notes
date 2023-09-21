import React, { useState } from 'react'

const Withhook = () => {
  
    const [count,setCount] = useState(0)
    const decrement = () => setCount((pre)=>pre-1)
   
  return (
    <div>
      <h1>WITH HOOK</h1>
     
      <h3>{count}</h3>
      <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Withhook

