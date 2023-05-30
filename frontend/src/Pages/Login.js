import React, { useContext, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
//import Navbar from '../Components/Navbar'
export default function Login() {
  const userRef = useRef()
  const PassRef = useRef()
  const {User , dispatch,isFetching} = useContext(Context)
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({
      type : "LOGIN_START"
    })
    try {
      const res = await axios.post("https://blogifyapi.onrender.com/api/auth/login",{
        Username : userRef.current.value,
        Password : PassRef.current.value
      })
      dispatch({
        type : "LOGIN_SUCCESS", payload : res.data
      })
      console.log(res);
    } catch (error) {
      dispatch({
        type : "LOGIN_FAILURE"
      })
      alert("Wrong Credentials")
    }
    
  }
  console.log(User);
  console.log(isFetching);
  return (
    <>
    
    <div className=' h-screen flex flex-col justify-center items-center' style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("https://images.unsplash.com/photo-1684783124856-8a3b3b9d49d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',backgroundSize:'cover'}}>
        <span className=' text-5xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Login</span>   
        <form className=' mt-5 flex flex-col'>
            <label  className=' mt-3 mb-3 text-2xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Username</label>
            <input type="text" placeholder='Enter Username' className=' p-3 bg-white outline-none font-bold' ref={userRef} />
            <label className=' mt-3 mb-3 text-2xl' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Password</label>
            <input type="password" placeholder='Enter Password' className=' p-3 bg-white outline-none' ref={PassRef}/>
            <button className=' mt-5 bg-[lightcoral] hover:bg-red-800 hover:text-white cursor-pointer rounded-lg p-2 text-black font-bold disabled:cursor-not-allowed' onClick={HandleSubmit} disabled={isFetching} >Login</button>
            {/* {error && <span className=' mx-auto mt-4 text-red-900 font-bold'>Enter correct username and password!</span>} */}
        </form>
        <Link to='/register'><button className=' absolute top-28 right-5  bg-teal-500 hover:bg-teal-900 p-3 rounded-lg font-bold hover:text-white text-black'>Register</button></Link>
    </div>
    </>
  )
}
