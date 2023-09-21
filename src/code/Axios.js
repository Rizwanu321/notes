import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Axios = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
      const fetchData = async () => {
        try{
           const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
           setUsers(response.data)
        }
        catch(err){
            console.log(err)
        }
      }  
      fetchData()
    },[])
  return (
    <div>
        <h1>Axios</h1>
        {users.map((user) => (
        <ul key={user.id}>
            <li>User Id: {user.id}</li>
            <li>User Title: {user.title}</li>
        </ul>
       ))}
    </div>
  )
}

export default Axios