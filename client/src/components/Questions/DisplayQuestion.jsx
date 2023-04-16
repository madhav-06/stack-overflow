import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import QuestionDetails from './QuestionDetails'
import '../../App.css'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <QuestionDetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion