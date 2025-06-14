// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';
// function Login() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = async (data) => {
//     const userInfo={
//       // fullName:data.fullName,
//       email:data.email,                        //only email and password hum login pe bhej rahe h 
//       password:data.password,
      
//     };
//     await axios.post("http://localhost:4001/user/login",userInfo)  //jaha jaha api callkrte h waha pe async await ka use krte h
//     .then((res)=>{
//       console.log(res.data)
//       if(res.data){
//         // alert("Login Successfully")
//         toast.success('Login Successfully');
//         document.getElementById("my_modal_3").close()

//         setTimeout(()=>{
//           window.location.reload();
//           localStorage.setItem("yahapekuchbhiname",JSON.stringify(res.data.user)); //json.stringify exact data ko local storage me show kardega
//         },1000);
        
       

//       }
//     }).catch((err)=>{
//       if (err.response){
//         console.log(err);
//         // alert();
//         toast.error("invalid userName or password");
//         setTimeout(()=>{},2000);

//       }
      
      
//     });
//   }
//     // console.log(data);
//   return (
//     <div>
//         <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       {/* <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
//       {/* <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
//       <Link
//       to="/"
//       // onClick={() => navigate("/")}  // ✅ `/` par navigate karega
//       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//       onClick={()=> document.getElementById("my_modal_3").close()}
//     >
//       ✕
//     </Link>
                
    
//     {/* Email */}
//     <h3 className="font-bold text-lg">Login</h3>
//     <div className='mt-4 space-y-2 px-3 '>
// <span>
//    Email
// </span>
// <br />
// <input  type="email" placeholder='Enter ypur Email' className=' w-80 px-3 py-1 border rounded-md outline-none' 
// {...register("email", { required: true })}/>
// <br />
// {errors.email && <span className='text-sm text-red-500'>This field is required</span>}                    {/* errors will return when field validation fails  */}


//     </div>
//     {/* Password */}
//     <div className='mt-7 space-y-2 px-3 '>
// <span>
//    Password
// </span>
// <br />
// <input type="Password" placeholder='Enter ypur Password' className=' w-80 px-3 py-1 border rounded-md outline-none'
// {...register("password", { required: true })} />
// <br />
// {errors.password && <span className='text-sm text-red-500'>This field is required</span>}                 {/* errors will return when field validation fails  */}


//     </div>
//     {/* Button */}
//     <div className='flex justify-around mt-4 '>
// <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
// <p>Not registered? <Link to="/signup" className='underline text-blue-400 cursor-pointer' >Signup</Link>{""}</p>

//     </div>
//     </form>
//   </div>
  
// </dialog>

//     </div>
    
//   )
// }
// console.log("Login")
// export default Login













//code with login timer


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [timer, setTimer] = useState(60);

  // Check lockout status from localStorage on first load
  useEffect(() => {                                                   //useEffect component k render hone pe har baar chlega e.g whatsapp ka message count har bar new msg aane pe update hota h 
    const storedLockTime = localStorage.getItem("lockoutStart");
    if (storedLockTime) {
      const elapsed = Math.floor((Date.now() - parseInt(storedLockTime)) / 1000);
      if (elapsed < 60) {
        setIsLocked(true);
        setTimer(60 - elapsed);
      } else {
        localStorage.removeItem("lockoutStart");
      }
    }
  }, []);

  // Handle countdown timer
  useEffect(() => {
    let countdown;
    if (isLocked && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer <= 0) {
      clearInterval(countdown);
      setIsLocked(false);
      setFailedAttempts(0);
      setTimer(60);
      localStorage.removeItem("lockoutStart");
    }
    return () => clearInterval(countdown);
  }, [isLocked, timer]);

  const onSubmit = async (data) => {
    if (isLocked) {
      toast.error(`Locked out. Try again in ${timer} seconds`);
      return;
    }

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success('Login Successfully');
        document.getElementById("my_modal_3").close();
        localStorage.setItem("yahapekuchbhiname", JSON.stringify(res.data.user));
        setTimeout(() => window.location.reload(), 1000);
        localStorage.removeItem("lockoutStart"); // Clear lock if any
        setFailedAttempts(0); // Reset
      }
    } catch (err) {
      toast.error("Invalid email or password");
      const updatedAttempts = failedAttempts + 1;
      setFailedAttempts(updatedAttempts);

      if (updatedAttempts >= 3) {
        setIsLocked(true);
        setTimer(60);
        localStorage.setItem("lockoutStart", Date.now().toString());
        toast.error("Maximum attempts reached. Please wait 1 minute.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >✕</Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className='mt-4 space-y-2 px-3'>
              <span>Email</span><br />
              <input type="email" placeholder='Enter your Email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })} />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-7 space-y-2 px-3'>
              <span>Password</span><br />
              <input type="password" placeholder='Enter your Password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })} />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {isLocked && (
              <div className="text-red-600 text-center mt-2">
                Too many attempts. Please try again in {timer} seconds.
              </div>
            )}

            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                disabled={isLocked}
                className={`px-3 py-1 rounded-md text-white ${isLocked ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-700 duration-200'}`}
              >
                Login
              </button>
              <p>Not registered? <Link to="/signup" className='underline text-blue-400'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
