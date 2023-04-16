import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Mainbar from '../Mainbar/Mainbar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import '../../App.css'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <Mainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Questions