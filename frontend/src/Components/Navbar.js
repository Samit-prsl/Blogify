import React from 'react'
import {Link} from 'react-router-dom'
//import {AiOutlineTwitter,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Navbar() {
    const user = true
  return (
    <>
    <div className=' top w-screen h-1/3 bg-[#fffffb] sticky top-0 flex justify-between items-center p-5  gap-5 pb-3 z-10' style={{'fontFamily': 'Josefin Sans, sans-serif'}}>
        {/* <div className=' topLeft flex flex-[3]'>
            <AiOutlineTwitter className=' text-2xl lg:text-3xl'  />
            <AiFillGithub className=' text-2xl lg:text-3xl'/>
            <AiFillLinkedin className=' text-2xl lg:text-3xl'/>
        </div> */}
        <div className=' topCentre flex  lg:ml-4'>
            <ul className=' TopList mt-4 flex justify-between gap-3 lg:gap-6'>
                <Link to='/'><li className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900 cursor-pointer'>Home</li></Link>
                <Link to='/write'><li className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900 cursor-pointer'>Write</li></Link>
                <li className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900 cursor-pointer'>{user && "Logout"}</li>
                <li className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900 hidden lg:block cursor-pointer'>Contact</li>
                <li className=' TopListItems text-xl lg:text-2xl  text-gray-900 hover:text-yellow-900 hidden lg:block cursor-pointer'>Links</li>
            </ul>
        </div>
        <div className=' topRight flex  mt-2 gap-2 lg:gap-4 mr-3'> 
        {user ? (
            <>
        <Link to='/settings'><img src='https://images.unsplash.com/photo-1518929937497-ba52a06c94eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='...' className=' TopImage h-10 lg:h-12 w-10 lg:w-12 rounded-[50%] object-contain'/></Link>
        <AiOutlineSearch className=' text-3xl lg:text-4xl mt-1  text-gray-900 hover:text-yellow-900 cursor-pointer'/>
        </>
        ):(
        <>
             <Link to='/login' className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900  cursor-pointer'>Login</Link>
             <Link to='/register' className=' TopListItems text-xl lg:text-2xl text-gray-900 hover:text-yellow-900 cursor-pointer'>Register</Link>
        </>)}
            {/* <Link to='/settings'><img src='https://images.unsplash.com/photo-1518929937497-ba52a06c94eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='...' className=' TopImage h-10 lg:h-12 w-10 lg:w-12 rounded-[50%] object-contain'/></Link> */}
            {/* <AiOutlineSearch className=' text-3xl lg:text-4xl mt-1  text-gray-900 hover:text-yellow-900 cursor-pointer'/> */}
        </div>
    </div>
    </>
  )
}
