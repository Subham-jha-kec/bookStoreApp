import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser] = useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("yahapekuchbhiname")
            toast.success("Logout successfully")
            // document.getElementById("my_modal_3").close()
            window.location.reload();

        setTimeout(()=>{
          window.location.reload();
        //   localStorage.setItem("yahapekuchbhiname",JSON.stringify(res.data.user)); //json.stringify exact data ko local storage me show kardega
        },3000);
            // window.location.reload();
        } catch (error) {
            toast.error("Error:"+ error)
        setTimeout(()=> {},2000);
        }
    };
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' 
        onClick ={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout