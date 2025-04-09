import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
      {/* <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
      <Link
      onClick={() => navigate("/")}  // ✅ `/` par navigate karega
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    >
      ✕
    </Link>
                
    
    {/* Email */}
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2 px-3 '>
<span>
   Email
</span>
<br />
<input  type="email" placeholder='Enter ypur Email' className=' w-80 px-3 py-1 border rounded-md outline-none' 
{...register("email", { required: true })}/>
<br />
{errors.email && <span className='text-sm text-red-500'>This field is required</span>}                    {/* errors will return when field validation fails  */}


    </div>
    {/* Password */}
    <div className='mt-7 space-y-2 px-3 '>
<span>
   Password
</span>
<br />
<input type="Password" placeholder='Enter ypur Password' className=' w-80 px-3 py-1 border rounded-md outline-none'
{...register("Password", { required: true })} />
<br />
{errors.Password && <span className='text-sm text-red-500'>This field is required</span>}                 {/* errors will return when field validation fails  */}


    </div>
    {/* Button */}
    <div className='flex justify-around mt-4 '>
<button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
<p>Not registered? <Link to="/signup" className='underline text-blue-400 cursor-pointer' >Signup</Link>{""}</p>

    </div>
    </form>
  </div>
  
</dialog>

    </div>
    
  )
}
console.log("Login")
export default Login