import React from 'react'
import banner from "../../public/banner.jpg";
function Banner() {
  return (
  <>
    <div className='flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4'>

<div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
<div className='space-y-12 md:32 mt-12'>
<h1 className='text-4xl font-bold'>Hey Buddy! You are welcome to learn something <span className='text-pink-500'> interesting everydy!!! </span> </h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque itaque aut, amet obcaecati repellat eum expedita dolore illum assumenda quis incidunt, animi quae ab nam maxime labore iure, ipsa eligendi.</p>
</div>

<div className='mt-9'>
<label className="flex items-center px-3 py-2 border rounded-md gap-2 outline-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input className='outline-none' type="email" placeholder="mail@site.com" required/>
</label>
<button className="mt-6 btn btn-secondary">Secondary</button>
</div>
</div>
<div className='order-1 w-full md:w-1/2'>
<img className=' w-92 h-92 mt-1' src={banner} alt="banner" />
</div>

    </div>
    </>
  )
}
// console.log(hello);
export default Banner





