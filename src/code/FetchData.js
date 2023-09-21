import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState([])

  const fetchUserData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setUsers(json))   
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
       <h1>FETCH SINGLE DATA</h1>
        <ul key={users.id}>
            <li>User Id: {users.id}</li>
            <li>User Title: {users.title}</li>
        </ul>
    </div>
  );
}


export default FetchData