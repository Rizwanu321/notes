import React, { useEffect, useState } from 'react'

const FetchDatas = () => {
    const [users, setUsers] = useState([])

  const fetchUserData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        setUsers(json) 
        console.log(users)   
  })
  }  

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
       <h1>FETCH MORE DATAS</h1>
       {users.map((user) => (
        <ul key={user.id}>
            <li>User Id: {user.id}</li>
            <li>User Title: {user.title}</li>
        </ul>
       ))}
    </div>
  );
}


export default FetchDatas