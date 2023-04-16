import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import QuestionsList from './QuestionsList'
import './Mainbar.css'

const Mainbar = () => {

  const user=1;
  const navigate=useNavigate()
  const questionslist=useSelector((state)=>state.questionsReducer)
  // console.log(questionslist)

  const checkAuth = () => {
    if(user===null){
      alert("Login to ask aquestion")
      navigate('/login')
    }
    else{
      navigate('/askquestion')
    }
  }

  // var questionslist=[{
  //   _id:1,
  //   upVotes:3,
  //   downVotes:1,
  //   noofAnswers:2,
  //   questionTitle:"What is a function",
  //   questionBody:"It meant to be",
  //   questionTags:['java', 'node js', 'react js', 'mangoose'],
  //   userPosted:'mano',
  //   askedOn:'Jan 1',
  //   answer:[{
  //     answerBody:'Answer',
  //     userAnswered:'Kumar',
  //     answeredOn:'Jan 2',
  //     userId:2
  //   }]
  // }]

  const location=useLocation()

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionslist.data===null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionslist.data.length} questions</p>
            <QuestionsList questionslist={questionslist.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default Mainbar