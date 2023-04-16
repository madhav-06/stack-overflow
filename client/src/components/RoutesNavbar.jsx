import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Questions from './Questions/Questions'
import AskQuestion from './AskQuestion/AskQuestion'
import DisplayQuestion from './Questions/DisplayQuestion'
import Tags from '../components/Tags/Tags'
import Users from './Users/Users'
import UserProfile from './UserProfile/UserProfile'

const RoutesNavbar = () => {
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='login' Component={Login}/>
      <Route path='/questions' Component={Questions}/>
      <Route path='/askquestion' Component={AskQuestion}/>
      <Route path='/questions/:id' Component={DisplayQuestion}/>
      <Route path='/tags' Component={Tags}/>
      <Route path='/users' Component={Users}/>
      <Route path='/users/:id' Component={UserProfile}/>
    </Routes>
  )
}

export default RoutesNavbar