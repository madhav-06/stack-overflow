import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setCuttentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'
import logo from '../../images/logo.jpg'
import search from '../../images/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {
  const dispatch=useDispatch()  
  const navigate=useNavigate()
  var user=useSelector((state)=>(state.currentUserReducer))
//   console.log(user)

  useEffect(()=>{
    const token=user?.token
    if(token){
      const decodedToken=decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCuttentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch]) // keeps the user logged in everytime when the page reloads

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
    navigate('/')
    dispatch(setCuttentUser(null))
  }

  return (
    <nav className='main-navbar'>
        <div className='navbar'>
            <Link to='/' className='nav-logo nav-item'>
                <img src={logo} alt='Stackoverflow logo'/>
            </Link>
            <Link to='/' className='nav-btn nav-item'>About</Link>
            <Link to='/' className='nav-btn nav-item'>Products</Link>
            <Link to='/' className='nav-btn nav-item'>For Teams</Link>
            <form>
                <input type="text" placeholder='search...'/>
                <img src={search} alt="search" className='search-icon' width='18' />
            </form>
            {user===null ? 
                <Link to='/login' className='nav-btn nav-links'>Log in</Link> : 
                <>
                    <Avatar backgroundColor='#009dff' px='10px' py='7px' color='white' borderRadius='50%' ><Link to={`/users/${user?.result?._id}`}style={{ color: "white", textDecoration: "none" }}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-links nav-item' style={{ marginLeft:'15px' }} onClick={handleLogout}>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar