import React, {useState} from 'react'
import {useParams, useNavigate, useLocation, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { deleteQuestion, postAnswer,voteQuestion } from '../../actions/questions' // not default export
import moment from 'moment'
import copy from 'copy-to-clipboard'
import DisplayAnswer from './DisplayAnswer'
import Avatar from '../Avatar/Avatar'
import upvote from '../../images/upvote.svg'
import downvote from '../../images/downvote.svg'
import './Questions.css'

const QuestionDetails = () => {

    // var questionslist=[{
    //     _id:'1',
    //     upVote:3,
    //     downVote:1,
    //     noOfAnswers:2,
    //     questionTitle:"What is a function",
    //     questionBody:"It meant to be",
    //     questionTags:['java', 'node js', 'react js', 'mangoose'],
    //     userPosted:'mano',
    //     askedOn:'Jan 1',
    //     answer:[{
    //       answerBody:'Answer',
    //       userAnswered:'Kumar',
    //       answeredOn:'Jan 2',
    //       userId:2
    //     }]
    // }]

    const questionslist=useSelector((state)=>state.questionsReducer)
    const user=useSelector((state)=>state.currentUserReducer)

    const navigate=useNavigate()

    const dispatch=useDispatch()

    const location=useLocation()
    const url='http://localhost:3000'

    const {id}=useParams()

    const [answer, setanswer] = useState('')

    const handlePostAnswer=(e, answerLength)=>{
        e.preventDefault()
        if(user===null){
            alert("Login or Signup to answer a question")
            navigate('/login')
        }
        else{
            if(answer===''){
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers:answerLength+1, answerBody:answer, userAnswered:user.result.name, userId:user.result._id}))
            }
        }
    }

    const handleShare=()=>{
        copy(url+location.pathname)
        alert("URL copied: "+url+location.pathname)
    }

    const handleDelete=()=>{
        dispatch(deleteQuestion(id, navigate))
    }

    const handleUpVote=()=>{
        if (user === null) {
            alert("Login or Signup to up vote a question")
            navigate("/login")
        }
        else{
            dispatch(voteQuestion(id, 'upVote', user.result._id))
        }
    }

    const handleDownVote=()=>{
        if (user === null) {
            alert("Login or Signup to up vote a question")
            navigate("/login")
        }
        else{
            dispatch(voteQuestion(id, 'downVote', user.result._id))
        }
    }

    // id=`ObjectId('${id}')`
    // console.log(questionslist)
    // console.log(id)
    // console.log(questionslist)

  return (
    <div className='question-details-page'>
        {
            questionslist.data===null ?
            <h1>Loading...</h1> :
            <>
                {
                    questionslist.data.filter((question)=>question._id===id).map((question)=>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container2">
                                    <div className="question-votes">
                                        <img src={upvote} alt="upvote" width='18' className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote.length-question.downVote.length}</p>
                                        <img src={downvote} alt="downvote" width='18' className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width:'100%'}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    user?.result?._id===question?.userId && (
                                                        <button type='button' onClick={handleDelete}>Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <p>asked on {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>{question.userPosted}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers!==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your answer</h3>
                                <form onSubmit={(e)=>{handlePostAnswer(e, question.answer.length)}}>
                                    <textarea cols="30" rows="10" onChange={e=>setanswer(e.target.value)}></textarea><br/>
                                    <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag)=>(
                                            <Link to='/tags' key={tag} className='ans-tags'>{tag} </Link>
                                        ))
                                    }
                                    or
                                    <Link to='/askquestion' style={{textDecoration:'none', color:'#009dff'}}>ask your own question</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionDetails