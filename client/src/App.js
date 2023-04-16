import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchALLQuestions } from './actions/questions';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import RoutesNavbar from './components/RoutesNavbar';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchALLQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesNavbar />
      </Router>
    </div>
  );
}

export default App;