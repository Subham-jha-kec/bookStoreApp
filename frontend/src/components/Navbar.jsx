// import React, { useEffect, useState } from 'react'

// function Navbar() {

//   const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
//   const element = document.documentElement;   
//   useEffect(()=>{
//     if(theme==="dark"){
//     localStorage.setItem("theme","dark")
//     element.classList.add("dark");
//   }
//   else{
//     element.classList.remove("dark");
//     localStorage.setItem("theme","light");
//     element.classList.remove("dark")
//   }
//   },[theme]);
//   const [sticky,setSticky]=  useState(false);
//      useEffect(()=>{
//       const handleScroll=()=>{
//         if(window.scrolly>0){
//           setSticky(true);
//         }
//         else{
//           setSticky(false);
//         }
//       };
//       window.addEventListener("scroll",handleScroll)
//       return ()=>{
//         window.removeEventListener("scroll",handleScroll)
//       }
//      },[])
//     const navItems =(
//         <>
//          <li><a href='/'>Home</a></li>
//       <li><a href='/course'>Course</a></li>
//       <li><a>Contact</a></li>
//       <li><a>About</a></li>
//         </>
//     )
//   return (
//     <>

//     <div className={`dark:bg-slate-900 dark:text-white fixed left-0 right-0 top-0 max-w-screen-2xl container mx-auto md:px-20 px-4 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white  duration-300 transition-all ease-in-out":""} `}>
//     <div className=" navbar"> 
//   <div className="navbar-start ">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//        {navItems}
//       </ul>
//     </div>
//     <a className="text-2xl font-1rem font-bold cursor-pointer">bookStore</a>
//   </div>
  
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
      
//       {navItems}
      
      
//     </ul>
    
//   </div>
//   <div className='hidden md:block'>
//   <label className="flex items-center px-3 py-2 border rounded-md gap-2">
//   <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
//   <input className='outline-none' type="text" required placeholder="Search"/>
// </label>

//   </div>
//   <div>
//   <label className="swap swap-rotate">
//   {/* this hidden checkbox controls the state */}
//   <input type="checkbox" className="theme-controller" value="synthwave" />

//   {/* sun icon */}
//   <svg
//     className="swap-off h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//       onClick = {()=>setTheme(theme==="light"?"dark":"light")}
//     <path
//       d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>

//   {/* moon icon */}
//   <svg
//     className="swap-on h-7 w-7 fill-current"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24">
//       onClick{()=>setTheme(theme==="dark"?"light":"dark")}
//     <path
//       d="M21.64,13a1,1,0,0,0-1.05-.14,7.05,7.05,0,0,1-3.37.73A8.15,7.15,0,0,1,9.08,5.49a8.59,7.59,0,0,1,.25-2A1,1,0,0,0,7,2.36,7.14,7.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,7.14,0,0,1,7.08,5.22v.27A10.15,7.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,7.11,0,0,1,12.14,19.73Z" />
//   </svg>
// </label>
//   </div>
//   <div className="px-2">
//     <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer px-">Login</a>
//   </div>
// </div>
// </div>

//     </>
//   )
// }

// export default Navbar




//working


// import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import { Link } from 'react-router-dom';
// import { useAuth } from "../context/AuthProvider";
// import Logout from "./Logout";
// function Navbar() {

//   const [authUser, setAuthUser] = useAuth();
//   // console.log(authUser);
  
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const element = document.documentElement;

//   useEffect(() => {
//     if (theme === "dark") {
//       localStorage.setItem("theme", "dark");
//       element.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "light");
//       element.classList.remove("dark");
//     }
//   }, [theme]);

//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = (
//     <>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/course">Course</a>
//       </li>
//       <li>
//       <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//       </li>
//       <li>
//         <a>About</a>
//       </li>
//     </>
//   );

//   return (
//     <>
//       <div
//         className={`dark:bg-slate-900 dark:text-white fixed left-0 right-0 top-0 max-w-screen-2xl container mx-auto md:px-20 px-4 z-50  ${
//           sticky
//             ? "sticky-navbar shadow-sm   dark:bg-slate-600 dark:text-white  duration-300 transition-all ease-in-out"
//             : ""
//         } `}
//       >
        
//         <div className="navbar">
//           <div className="navbar-start ">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-7 6h16"
//                   />
//                 </svg>
//               </div>
//               <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                 {navItems}
//               </ul>
//             </div>
//             <a className="text-2xl font-1rem font-bold cursor-pointer">bookStore</a>
//           </div>

//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">{navItems}</ul>
//           </div>

//           <div className="hidden md:block">
//             <label className="flex items-center px-3 py-2 border rounded-md gap-2">
//               <svg
//                 className="h-[1em] opacity-50 "
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
//                   <circle cx="11" cy="11" r="7"></circle>
//                   <path d="m21 21-4.3-4.3"></path>
//                 </g>
//               </svg>
//               <input className="dark:bg-slate-900 dark:text-white outline-none" type="text" required placeholder="Search" />
//             </label>
            
//           </div>

//           {/* ✅ Dark Mode Toggle Fix */}
//           <div>
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//               {theme === "light" ? (
//                 <svg
//                   className="h-7 w-7 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-7 w-7 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M21.64,13a1,1,0,0,0-1.05-.14,7.05,7.05,0,0,1-3.37.73A8.15,7.15,0,0,1,9.08,5.49a8.59,7.59,0,0,1,.25-2A1,1,0,0,0,7,2.36,7.14,7.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,7.14,0,0,1,7.08,5.22v.27A10.15,7.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,7.11,0,0,1,12.14,19.73Z" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {
//             authUser? (<Logout/>)  : (
//             <div className="px-2">
//             <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
//             onClick={()=>document.getElementById("my_modal_3").showModal()}>
//               Login
//             </a>
//             <Login />
            
//           </div>               //authUser h to logout wala dikhao nhi to login wala
//           )}

          
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;






import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      element.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      element.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔍 Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const items = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "CSS", "HTML"]; // sample data

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleResultClick = (item) => {
    setSearchTerm(""); // Clear search bar
    setSearchResults([]); // Clear results
    navigate(`/details/${item}`);
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <>
      <div className={`dark:bg-slate-900 dark:text-white fixed left-0 right-0 top-0 max-w-screen-2xl container mx-auto md:px-20 px-4 z-50 ${
        sticky ? "sticky-navbar shadow-sm dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : ""
      }`}>
        <div className="navbar relative">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">bookStore</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* 🔍 Search Box */}
          <div className="hidden md:block relative">
            <label className="flex items-center px-3 py-2 border rounded-md gap-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                className="dark:bg-slate-900 dark:text-white outline-none"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </label>

            {/* 🔽 Clickable Search Results */}
            {searchTerm && (
              <div className="absolute bg-white dark:bg-slate-800 shadow-md mt-2 w-64 rounded-md p-2 z-50">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-slate-600 cursor-pointer rounded"
                        onClick={() => handleResultClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-300">No results found</p>
                )}
              </div>
            )}
          </div>

          {/* 🌙 Light/Dark Toggle */}
          <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? (
                <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41...Z" />
                </svg>
              ) : (
                <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
                </svg>
              )}
            </button>
          </div>

          {/* 🔐 Auth Buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <div className="px-2">
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
