import React from 'react'
import SideBar from '../sidebar/SideBar'

const Layout = ({children}) => {
  return (
    
    <div>
    <SideBar/>
     <main>
        {children}
     </main>
    </div>
    
  )
}

export default Layout