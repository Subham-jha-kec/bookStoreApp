// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'


// function Signup() {
//   return (
//     <>
//     <div className='flex h-screen items-center justify-center '>
//     <div id="my_modal_3" className="w-[600px]  p-7 rounded-md">
//   <div className="border-[2px] shadow-md p-7 rounded-md relative">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 overflow-hidden">✕</Link>
//     </form>
     
    
//     {/* Email */}
//     <h3 className="font-bold text-lg">Signup</h3>
//     {/* name */}
//     <div className='mt-4 space-y-2 px-3 '>
// <span>
//    Name
// </span>
// <br />
// <input type="text" placeholder='Enter ypur name' className=' w-80 px-3 py-1 border rounded-md outline-none' />


//     </div>
    
//     <div className='mt-4 space-y-2 px-3 '>
// <span>
//    Email
// </span>
// <br />
// <input type="email" placeholder='Enter ypur Email' className=' w-80 px-3 py-1 border rounded-md outline-none' />


//     </div>
//     {/* Password */}
//     <div className='mt-7 space-y-2 px-3 '>
// <span>
//    Password
// </span>
// <br />
// <input type="Password" placeholder='Enter ypur Password' className=' w-80 px-3 py-1 border rounded-md outline-none' />


//     </div>
//     {/* Button */}
//     <div className='flex justify-around mt-4 '>
// <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
// <p>Have account?{""} <button  className='underline text-blue-400 cursor-pointer'
// onClick={()=>document.getElementById("my_modal_3").showModal()
// } >Login</button>{""}

// </p>
// <Login/>

//     </div>
//   </div>
// </div>
// </div> 
//     </>
//   )
// }

// export default Signup

// // console.log("hr")








import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";



function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="signup_modal" className="w-[600px] p-7 rounded-md">
          <div className="border-[2px] shadow-md p-7 rounded-md relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 overflow-hidden">
                ✕
              </Link>
            

            {/* Signup Heading */}
            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name Input */}
            <div className="mt-4 space-y-2 px-3">
              <span>Name</span>
              <br />
              <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" 
              {...register("name", { required: true })}/>
              <br />
              {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Email Input */}
            <div className="mt-4 space-y-2 px-3">
              <span>Email</span>
              <br />
              <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded-md outline-none" 
              {...register("email", { required: true })}/>
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Password Input */}
            <div className="mt-7 space-y-2 px-3">
              <span>Password</span>
              <br />
              <input type="password" placeholder="Enter your Password" className="w-80 px-3 py-1 border rounded-md outline-none" 
              {...register("password", { required: true })}/>
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Signup Button + Login Link */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have an account?{' '}
                {/* <Link to="/login" className="underline text-blue-400 cursor-pointer">
                  Login
                </Link> */}
                {/* <div className="px-2">
            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
            onClick={()=>document.getElementById("my_modal_3").showModal()}>
              Login
            </a>
            <Login />
          </div> */}

<a  className='underline text-blue-400 cursor-pointer'
onClick={()=>document.getElementById("my_modal_3").showModal()
} >Login</a>
<Login/>

              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
