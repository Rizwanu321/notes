import React, { useCallback, useState } from 'react'
import Increment from './Increment'

const Count = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(() => {
        setCount((pre)=>pre+1)
        console.log("increment")
    },[setCount])
  return (
    <div>
      <h1>CALLBACK AND MEMO</h1>
      <h3>{count}</h3>
      <Increment inc={increment} />
      <button onClick={()=>setCount(prev => prev-1)}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Count