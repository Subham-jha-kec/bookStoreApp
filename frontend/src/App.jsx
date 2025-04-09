import React from 'react'
import Home from './Home/Home'
// import Course from './components/Course'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'



function App() {
  return (
    <>
  

     {/* <Home />
     <Course/> */}
<div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
<Route path="/" element = {<Home/>}/>
{/* <Route path="/" element={<Home />} /> */}
<Route path="/course" element ={<Courses/>}/> 
<Route path="/Signup" element ={<Signup/>}/>
<Route path="/Login" element ={<Login/>}/>
<Route path="/Contact" element ={<Contact/>}/>
     </Routes>
</div>
    </>

  )
}

export default App

