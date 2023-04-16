import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { askQuestion } from '../../actions/questions'
import './AskQuestion.css'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle]=useState('')
  const [questionBody, setQuestionBody]=useState('')
  const [questionTags, setQuestionTags]=useState('')

  const dispatch=useDispatch()
  const User=useSelector((state)=>(state.currentUserReducer))
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log({questionTitle, questionBody, questionTags})
    if(User){
      if(questionTitle && questionBody && questionTags){
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted:User.result.name, userId:User?.result?._id}, navigate))
      }
      else{
        alert("Please enter all the fields")
      }
    }
    else{
      alert("Login to ask a question")
    }
  }

  const handleEnter=(e)=>{
    if(e.key==='Enter'){
        setQuestionBody(questionBody+'\n')
    }
  }

  return (
    <div className='ask-question'>
        <div className='ask-question-container'>
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="que-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input type="text" id='que-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                    </label>
                    <label htmlFor="que-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea id="que-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyDown={handleEnter}></textarea>
                    </label>
                    <label htmlFor="que-tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text" id='que-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}} placeholder='e.g. (xml typescript wordpress)'/>
                    </label>
                </div>
                <input type="submit" value='Review your question' className='btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion