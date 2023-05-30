import React, { useContext, useState } from 'react'
import {GrAdd} from 'react-icons/gr'
import { Context } from '../Context/Context'
import axios from 'axios'
export default function Write() {
  const [Title,SetTitle] = useState("")
  const [Desc,SetDesc] = useState("")
  const [file,SetFile] = useState(null)
  const {User} = useContext(Context)
  const HandleSubmit = async (e)=>{
    e.preventDefault()
    const newPost = {
      Username : User.Username,
      Title,
      Desc,
    }
    if(file){
      const data = new FormData()
      const fileName = Date.now() + file.name
      data.append("name",fileName)
      data.append("file",file)
      newPost.Photo = fileName
      try {
        await axios.post("https://blogifyapi.onrender.com/api/upload",data)
      } catch (error) {
        
      }
    }
   try {
    const res = await axios.post("https://blogifyapi.onrender.com/api/post",newPost)
    window.location.replace("/post/" + res.data._id)
   } catch (error) {
    
   }
  }
  return (
    <>
     <div className=' pt-12 mb-10'>
      {file && (
      <img src={URL.createObjectURL(file)} alt="..." className=' ml-12 lg:ml-44 w-[70vw] h-64 object-cover mb-5 rounded-lg' />
      )}
      {/* <img src="https://plus.unsplash.com/premium_photo-1668359408663-e18c2dabc0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' ml-12 lg:ml-44 w-[70vw] h-64 object-cover mb-5 rounded-lg' /> */}
      <form>
        <div className=' ml-5 lg:ml-36 flex items-center'>
            <label htmlFor="fileinput"><GrAdd className=' w-6 h-6 rounded-[50%] border-solid border-2 text-xl text-gray-600 cursor-pointer' title='Add An Image'/></label>
            <input type="file" id='fileinput' className=' hidden' onChange={(e)=>{SetFile(e.target.files[0])}} />
            <input type="text" placeholder='Title' onChange={(e)=>{SetTitle(e.target.value)}} autoFocus={true} className=' text-3xl border-none p-5 w-[70vw] outline-none ml-1 lg:ml-2 placeholder:font-semibold font-semibold' style={{border:'solid 1px gray'}} />
        </div>
        <div className=' ml-12 lg:ml-44 flex items-center mt-5'>
            <textarea placeholder='Tell Your Story...' rows='8' className=' text-xl w-[70vw] p-5 outline-none' type='text' onChange={(e)=>{SetDesc(e.target.value)}} style={{border:'solid 1px gray',"fontFamily": "Lora, serif"}}/>
        </div>
        <button className=' mt-5 bg-yellow-700 hover:bg-yellow-900 p-3 rounded-xl ml-60 lg:ml-[1060px]' onClick={HandleSubmit} style={{"fontFamily": "Ubuntu, sans-serif"}}>Publish</button>
      </form>
    </div>
  </>
  )
}
