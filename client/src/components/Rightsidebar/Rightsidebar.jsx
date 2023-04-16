import React from 'react'
import Widget from './Widget'
import Widgettags from './Widgettags'
import './Rightsidebar.css'

const Rightsidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <Widgettags/>
    </aside>
  )
}

export default Rightsidebar