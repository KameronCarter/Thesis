import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Budgets from './pages/Budgets.jsx';

function App() {

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("loggedInUser");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/budgets' element={<Budgets />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
