import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Budgets from './pages/Budgets.jsx';
import CreateBudget from './pages/CreateBudget.jsx';
import ChangePassword from './pages/ChangePassword.jsx';
import Budgeting from './pages/Budgeting.jsx';
import Savings from './pages/Savings.jsx';
import DebtAndLoan from './pages/Debt&Loan.jsx';
import Credit from './pages/Credit.jsx';

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
        <Route path='/budgeting' element={<Budgeting />}></Route>
        <Route path='/savings' element={<Savings />}></Route>
        <Route path='/debt-and-loan' element={<DebtAndLoan />}></Route>
        <Route path='/credit' element={<Credit />}></Route>
        <Route path='/create-budget' element={<CreateBudget />}></Route>
        <Route path='/change-password' element={<ChangePassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
