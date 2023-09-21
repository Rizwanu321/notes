import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
const SideBar = ({children}) => {
  return (
    <Layout>
    <div>
        <div className="container">
            <div className='sidebar'>
                <div className='top_section'>
                  <h1 className='logo'>Rizwanu</h1>
                </div>
                <div className='link'>
                  <Link to="/navbar2">Navbar</Link>
                </div>
            </div>
        </div>

        <main>
          {children}
        </main>
    </div>
    </Layout>
  )
}

export default SideBar