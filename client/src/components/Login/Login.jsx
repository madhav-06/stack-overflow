import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Aboutlogin from './Aboutlogin'
import './Login.css'
import icon from '../../images/stack-overflow.png'
import { signup, login } from '../../actions/login'

const Login = () => {
  const [isSignup, setIsSignup]=useState(false)
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const switchEvent = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email && !password){
      alert("Enter the email and password")
    }
    if(isSignup){
      if(!name){
        alert("Enter the name")
      }
      dispatch(signup({ name, email, password }, navigate))
    }else{
      dispatch(login({ email, password }, navigate))
    }
    console.log({name, email, password})
  }

  return (
    <section className='section'>
      {isSignup && <Aboutlogin/>}
      <div className='container'>
        {!isSignup && <img src={icon} alt='stack-overflow' className='logo' style={{height:'35px', width:'35px'}}/>}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor="display">
              <h4>Display</h4>
              <input type="text" name='display' id='display' onChange={(e)=>{setName(e.target.value)}}/>
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="text" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color : '#007ac6', fontSize:'13px'}}>Forgot password?</p>}
            </div>
            <input type="password" name='passwoed' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && <p style={{color : '#666767', fontSize : '13px'}}>Password must contain atleast eight<br/> characters, including 1 letter and 1<br/> number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor='checkbox'>
                <input type='checkbox' id='checkbox' style={{width:'15px', height:'15px', marginRight:'10px'}}/>
                <p style={{fontSize : '13px'}}>Opt-in to receive occasional,<br/> product updates, user research invitations,<br/> company announcements, and digests.</p>
              </label>
            )
          }
          <button type='submit' className='submit-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
          {isSignup && (<p style={{color : '#666767', fontSize : '13px'}}>By clicking "Sign up", you agree to our <span style={{color : '#007ac6'}}>terms of <br/> service</span>, <span style={{color : '#007ac6'}}>privacy policy</span> and <span style={{color : '#007ac6'}}>cookie policy</span></p>)}
        </form>
        <div style={{display:'flex'}}>
          <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}</p>
          <button type='button' className='switch-btn' onClick={switchEvent}>{isSignup ? 'Log in' : 'Sign up'}</button>
        </div>
      </div>
    </section>
  )
}

export default Login