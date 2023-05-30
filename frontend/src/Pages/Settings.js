import React, { useContext,useState } from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Sidebar from '../Components/Sidebar'
import { Context } from '../Context/Context'
import axios from 'axios'
export default function Settings() {
  const {User,dispatch} = useContext(Context)
  const [file,SetFile] = useState(null)
  const [Username,SetUsername] = useState("")
  const [Email,SetEmail] = useState("")
  const [Password,SetPassword] = useState("")
  const PF = "http://localhost:5000/images/"
  const HandleSubmit = async (e)=>{
    e.preventDefault()
    dispatch({ type : "UPDATE_START"})
    const UpdateUser = {
      UserId: User._id,
      Username,
      Email,
      Password
    }
    if(file){
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append("name",fileName)
      data.append("file",file)
      UpdateUser.ProfilePic = fileName
      try {
        await axios.post("https://blogifyapi.onrender.com/api/upload",data)
      } catch (error) {
        
      }
    }
   try {
    const res = await axios.put("https://blogifyapi.onrender.com/api/users/"+User._id,UpdateUser)
    dispatch({ type : "UPDATE_SUCCESS", payload : res.data})
   } catch (error) {
    dispatch({ type : "UPDATE_FAILURE"})
   }
  }
  const HandleLogout = ()=>{
    dispatch({ type : "LOGOUT" })
}
  return (
    <>
          <div className=' lg:flex '>
      <div className=' lg:flex-[9] p-5'>
        <div className=' flex items-center justify-between'>
            <span className=' text-3xl mb-5 text-[lightcoral]' style={{"fontFamily": "Lora, serif"}}>Update your Account</span>
            <button className=' bg-red-400 hover:bg-red-600 mb-5 rounded-lg p-3 cursor-pointer text-xl ' style={{"fontFamily": "Lora, serif"}} onClick={HandleLogout}>Delete your Account</button>
        </div>
        <form className=' flex flex-col'>
            <label className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>
                Profile Picture
            </label>
            <div className=' flex items-center mt-3 mb-3'>
                <img src={file ? URL.createObjectURL(file) :  PF + User.ProfilePic} alt="..." className=' w-[70px] h-[70px] rounded-3xl object-cover'  />
                <label htmlFor="fileinput"  className=' text-3xl mt-8' >
                    <AiOutlineUserAdd className=' text-2xl ml-5 cursor-pointer text-red-500' onChange={(e)=>{SetFile(e.target.files[0])}}/>
                </label>
                <input type="file" id='fileinput' className=' hidden' onChange={(e)=>{SetFile(e.target.files[0])}}/>
            </div>
            <label  className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Username</label>
            <input type="text" placeholder={User.Username} onChange={(e)=>{SetUsername(e.target.value)}} className=' text-gray-900 h-7 mt-3 mb-3 outline-none font-semibold' style={{borderBottom:'1px solid gray'}} />
            <label  className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Email</label>
            <input type="email" placeholder={User.Email} onChange={(e)=>{SetEmail(e.target.value)}} className=' text-gray-900 h-7 mt-3 mb-3 outline-none font-semibold' style={{borderBottom:'1px solid gray'}} />
            <label  className=' text-3xl mt-8 ' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Password</label>
            <input type="password" placeholder='*******' onChange={(e)=>{SetPassword(e.target.value)}} className=' text-gray-900 h-7 mt-3 mb-3 outline-none' style={{borderBottom:'1px solid gray'}} />
            <button className=' w-36 bg-teal-500 hover:bg-teal-900 p-3 mt-5 rounded-xl mx-auto' style={{'fontFamily': 'Josefin Sans, sans-serif'}} onClick={HandleSubmit}>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
    </>
    
  )
}
