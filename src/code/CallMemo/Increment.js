import React, { memo } from 'react'
let a=0
const Increment = ({inc}) => {
    console.log(a++)
  return (
    <div>
        <button onClick={inc}>Increment</button>
    </div>
  )
}

export default memo(Increment)