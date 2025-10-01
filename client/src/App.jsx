import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/register" />} />
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
