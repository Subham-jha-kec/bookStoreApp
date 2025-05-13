import React from 'react'
import Home from './Home/Home'
// import Course from './components/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import DetailsPage from './components/DetailsPage';


function App() {

const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
  

     {/* <Home />
     <Course/> */}
<div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
<Route path="/" element = {<Home/>}/>
{/* <Route path="/" element={<Home />} /> */}
<Route path="/course" element ={authUser ? <Courses />:<Navigate to="/signup"/>} />
<Route path="/Signup" element ={<Signup/>}/>
<Route path="/Login" element ={<Login/>}/>
<Route path="/Contact" element ={<Contact/>}/>
<Route path="/details/:name" element={<DetailsPage />} />
     </Routes>
     <Toaster />
</div>
    </>

  )
}

export default App





