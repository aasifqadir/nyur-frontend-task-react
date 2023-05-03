import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage';
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
// import UserHome from './components/UserHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user-list' element={<UserList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
