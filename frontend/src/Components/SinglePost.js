import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post,Setpost] = useState({})
  useEffect(()=>{
    const GetPost = async ()=>{
      const res = await axios.get("http://localhost:5000/api/post/"+path)
      Setpost(res.data);
    }
  GetPost()
  },[path])
  return (
    <>
    <div className=' singlepost flex-[9]'>
        <div className=' singlePageWrapper p-5 pr-0'>
          {post.Photo && ( <img src={post.Photo} alt='...' className=' w-[90%] lg:w-full h-80 rounded-md object-cover pl-5 lg:pl-0 '/>)}
            {/* <img src='https://images.unsplash.com/photo-1685029732403-7fa30906b99d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' className=' w-[90%] lg:w-full h-80 rounded-md object-cover pl-5 lg:pl-0 '/> */}
            <h1 className=' text-center text-xl m-3' style={{"fontFamily": "Lora, serif"}}>{post.Title}</h1>
        </div>
        <div className=' singlepostedit p-5 flex gap-4 float-right'>
            <AiOutlineEdit className=' text-2xl cursor-pointer hover:text-yellow-900'/>
            <AiOutlineDelete className=' text-2xl cursor-pointer hover:text-yellow-900'/>
        </div>
        <div className=' singlepostinfo p-5 flex mb-5 justify-between text-md lg:text-xl'style={{'fontFamily': 'Josefin Sans, sans-serif'}}>
            <span className=' author'>Author : <Link to={`/?user=${post.Username}`} ><b className=' text-yellow-800'>{post.Username}</b></Link></span>
            <span className=' time'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className=' p-5 text-lg first-letter:ml-5 first-letter:text-5xl' style={{"fontFamily": "Ubuntu, sans-serif"}}>
        {post.Desc}
        </p>
    </div>
  </>
  )
  
}