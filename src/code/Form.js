import React, { useState } from 'react'

const Form = () => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [toggle,setToggle] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`hai ${user}`)
        console.log(user)
        console.log(password)
    }
  return (
    <div>
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
           user: <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
           password: <input type="pasword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button type='submit' >submit</button>
        </form>
        <button onClick={()=>{
            setUser("")
            setPassword("")
        }} >reset</button>

        <h1>{user}</h1>

   <br />
   <br />
   <h1>HIDE/SHOW</h1>
        <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide Element Below" : "Show Element Below"}</button>
       {toggle &&
      <div>Toggle Challenge</div>}
    </div>
  )
}

export default Form