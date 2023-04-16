import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {deleteAnswer} from '../../actions/questions'
import moment from 'moment'
import Avatar from '../Avatar/Avatar'

const DisplayAnswer = ({question, handleShare}) => {
  const user=useSelector((state)=>state.currentUserReducer)
  
  const dispatch=useDispatch()

  const {id}=useParams()

  const handleDelete=(answerId, noOfAnswers)=>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers-1))
  }

  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                user?.result?._id===ans?.userId && (
                                <button type='button' onClick={()=>{handleDelete(ans._id, question.noOfAnswers)}}>Delete</button>
                                )
                            }
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor='green' px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>{ans.userAnswered}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer