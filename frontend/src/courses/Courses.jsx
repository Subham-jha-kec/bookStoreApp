import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/footer';
// import list from "../list.json";


function Courses() {
    // console.log(list)
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Course/>

    </div>
    <Footer/>


    </>
  );
}

export default Courses;