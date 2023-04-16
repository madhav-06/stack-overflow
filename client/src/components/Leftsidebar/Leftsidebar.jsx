import React from 'react'
import {NavLink} from 'react-router-dom'
import './Leftsidebar.css'

const Leftsidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='leftside-nav'>
        <NavLink to='/' className='leftside-links' activeclassname='active'><p>Home</p></NavLink>
        <div className='leftside-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/questions' className='leftside-links' activeclassname='active'>
            <p style={{paddingLeft:'10px'}}>Questions</p>
          </NavLink>
          <NavLink to='/tags' className='leftside-links' activeclassname='active' style={{paddingLeft:'40px'}}><p>Tags</p></NavLink>
          <NavLink to='/users' className='leftside-links' activeclassname='active' style={{paddingLeft:'40px'}}><p>Users</p></NavLink> 
      </div>
      </nav>
    </div>
  )
}

export default Leftsidebar