import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Register() {

  const [Username,SetUsername] = useState("")
  const [Password,SetPassword] = useState("")
  const [Email,SetEmail] = useState("")
  const [error,Seterror] = useState(false)
  const HandleSubmit = async (e)=>{
    e.preventDefault();
   try {
    Seterror(false)
    const res = await axios.post("http://localhost:5000/api/auth/register",{
      Username,
      Email,
      Password
    })
    //console.log(res);
    res.data && window.location.replace('/login')
   } catch (error) {
    Seterror(true)
    alert("Something Went Wrong!")
   }
  }

  return (
   

    <>
    
    <div className=' h-screen flex flex-col justify-center items-center' style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.unsplash.com/photo-1684783124856-8a3b3b9d49d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',backgroundSize:'cover'}}>
        <span className=' text-5xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Register</span>   
        <form className=' mt-5 flex flex-col'>
            <label  className=' mt-3 mb-3 text-2xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Username</label>
            <input type="text" placeholder='Enter Username' className=' p-3 bg-white outline-none font-bold' onChange={(e)=>{SetUsername(e.target.value)}} />
            <label  className=' mt-3 mb-3 text-2xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Email</label>
            <input type="email" placeholder='Enter Email' className=' p-3 bg-white outline-none font-bold' onChange={(e)=>{SetEmail(e.target.value)}} />
            <label className=' mt-3 mb-3 text-2xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Password</label>
            <input type="password" placeholder='Enter Password' className=' p-3 bg-white outline-none' onChange={(e)=>{SetPassword(e.target.value)}} />
            <button className=' mt-5 bg-[lightcoral] hover:bg-red-800 hover:text-white cursor-pointer rounded-lg p-2 text-black font-bold' onClick={HandleSubmit} >Register</button>
            {/* {error && <span className=' mx-auto mt-4 text-red-900 font-bold'>Enter correct username and password!</span>} */}
        </form>
        <Link to='/login'><button className=' absolute top-28 right-5  bg-teal-500 hover:bg-teal-900 p-3 rounded-lg font-bold hover:text-white text-black'>Login</button></Link>
    </div>
    </>
  )
}

  

