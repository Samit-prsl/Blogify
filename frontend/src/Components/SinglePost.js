import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../Context/Context'
export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post,Setpost] = useState({})
  const [title,Settitle] = useState("")
  const [desc,Setdesc] = useState("")
  const [update,Setupdate] = useState(false)
 
  const {User} = useContext(Context)
  useEffect(()=>{
    const GetPost = async ()=>{
      const res = await axios.get("https://blogifyapi.onrender.com/api/post/"+path)
      Setpost(res.data);
      Settitle(res.data.Title)
      Setdesc(res.data.Desc)
    }
  GetPost()
  },[path])
  const PF = "https://blogifyapi.onrender.com/images/"
  const HandleUpdate = ()=>{
   Setupdate(true)
  }
  const HandleDelete = async ()=>{
    try {
       await axios.delete("https://blogifyapi.onrender.com/api/post/"+path,{data : {Username : User.Username}})
      window.location.replace("/")
    } catch (error) {
      
    }
  }
  const HandleUpdateButton = async ()=>{
    try {
      await axios.put("https://blogifyapi.onrender.com/api/post/"+path, {Username : User.Username, Title : title , Desc : desc})
     window.location.replace("/")
   } catch (error) {
     
   }
  }
  return (
    <>
    <div className=' singlepost flex-[9]'>
        <div className=' singlePageWrapper p-5 pr-0'>
          {post.Photo && ( <img src={PF + post.Photo} alt='...' className=' w-[90%] lg:w-full h-80 rounded-md object-cover pl-5 lg:pl-0 '/>)}
            {/* <img src='https://images.unsplash.com/photo-1685029732403-7fa30906b99d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='...' className=' w-[90%] lg:w-full h-80 rounded-md object-cover pl-5 lg:pl-0 '/> */}
            {update ? <input type="text" placeholder='Title'  autoFocus={true} className=' text-3xl border-none p-5 w-[70vw] mt-5  outline-none ml-8 lg:ml-1 placeholder:font-semibold font-semibold' style={{border:'solid 1px gray'}} value={title} onChange={(e)=>{Settitle(e.target.value)}}/> 
            :( <h1 className=' text-center text-xl m-3' style={{"fontFamily": "Lora, serif"}}>{post.Title}</h1>)}
            {/* <h1 className=' text-center text-xl m-3' style={{"fontFamily": "Lora, serif"}}>{post.Title}</h1> */}
        </div>
        <div className=' singlepostedit p-5 flex gap-4 float-right'>
           {post.Username === User?.Username && (
            <>
             <AiOutlineEdit className=' text-2xl cursor-pointer hover:text-yellow-900' onClick={HandleUpdate}/>
             <AiOutlineDelete className=' text-2xl cursor-pointer hover:text-yellow-900' onClick={HandleDelete}/>
           </>)}
        </div>
        <div className=' singlepostinfo p-5 flex mb-5 justify-between text-md lg:text-xl'style={{'fontFamily': 'Josefin Sans, sans-serif'}}>
            <span className=' author'>Author : <Link to={`/?user=${post.Username}`} ><b className=' text-yellow-800'>{post.Username}</b></Link></span>
            <span className=' time'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {update ? <textarea placeholder='Tell Your Story...' rows='8' className=' text-xl w-[70vw] p-5 outline-none ml-12 lg:ml-5' type='text' value={desc} onChange={(e)=>{Setdesc(e.target.value)}}  style={{border:'solid 1px gray',"fontFamily": "Lora, serif"}}/> 
        : ( <p className=' p-5 text-lg first-letter:ml-5 first-letter:text-5xl' style={{"fontFamily": "Ubuntu, sans-serif"}}>
        {post.Desc}
        </p>)}
        {/* <p className=' p-5 text-lg first-letter:ml-5 first-letter:text-5xl' style={{"fontFamily": "Ubuntu, sans-serif"}}>
        {post.Desc}
        </p> */}
        {update ?  <button className=' mt-5 bg-yellow-700 hover:bg-yellow-900 p-3 rounded-xl ml-[136px] lg:ml-5 ' onClick={HandleUpdateButton} style={{"fontFamily": "Ubuntu, sans-serif"}}>Update</button> : 
        (<></>)}
    </div>
  </>
  )
  
}