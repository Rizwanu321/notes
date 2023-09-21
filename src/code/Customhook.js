import React from 'react';
import {useState} from 'react'
const useCounter = () => {
    const [count,setCount] = useState(0)
    const increment = () => setCount((pre)=>pre+1)
    const decrement = () => setCount((pre)=>pre-1)
    const reset = () => setCount(0)

    return {count,increment,decrement,reset}
}
const Customhook = () => {
  const {count,increment,decrement,reset} = useCounter()
  return (
    <div>
      <h1>CUSTOM HOOK</h1>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Customhook