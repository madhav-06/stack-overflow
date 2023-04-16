import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
    <div className='question-container'>
      <div className='votes-ans'>
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className='votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='question-details'>
        <Link to={`/questions/${question._id}`} className='question-title'>{question.questionTitle}</Link>
        <div className='tags-time'>
          <div className="tags">
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <p className='time'>asked {moment(question.askedOn).fromNow()} {question.userPosted}</p>
        </div>
      </div>
    </div>
  )
}

export default Questions