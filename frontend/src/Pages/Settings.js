import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Sidebar from '../Components/Sidebar'

export default function Settings() {
  return (
    <>
          <div className=' lg:flex '>
      <div className=' lg:flex-[9] p-5'>
        <div className=' flex items-center justify-between'>
            <span className=' text-3xl mb-5 text-[lightcoral]' style={{"fontFamily": "Lora, serif"}}>Update your Account</span>
            <span className=' text-red-400 mb-5 cursor-pointer text-xl' style={{"fontFamily": "Lora, serif"}}>Delete your Account</span>
        </div>
        <form className=' flex flex-col'>
            <label className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>
                Profile Picture
            </label>
            <div className=' flex items-center mt-3 mb-3'>
                <img src="https://images.unsplash.com/photo-1655401435835-c6829336f587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." className=' w-[70px] h-[70px] rounded-3xl object-cover'/>
                <label htmlFor="fileinput"  className=' text-3xl mt-8'>
                    <AiOutlineUserAdd className=' text-2xl ml-5 cursor-pointer text-red-500'/>
                </label>
                <input type="file" id='fileinput' className=' hidden' />
            </div>
            <label  className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Username</label>
            <input type="text" placeholder='asd' className=' text-gray-900 h-7 mt-3 mb-3 outline-none font-semibold' style={{borderBottom:'1px solid gray'}} />
            <label  className=' text-3xl mt-8' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Email</label>
            <input type="email" placeholder='asd@gmail.com' className=' text-gray-900 h-7 mt-3 mb-3 outline-none font-semibold' style={{borderBottom:'1px solid gray'}} />
            <label  className=' text-3xl mt-8 ' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Password</label>
            <input type="password" placeholder='*******' className=' text-gray-900 h-7 mt-3 mb-3 outline-none' style={{borderBottom:'1px solid gray'}} />
            <button className=' w-36 bg-teal-500 hover:bg-teal-900 p-3 mt-5 rounded-xl mx-auto' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
    </>
    
  )
}
