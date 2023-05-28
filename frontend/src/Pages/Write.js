import React from 'react'
import {GrAdd} from 'react-icons/gr'
export default function Write() {
  return (
    <>
     <div className=' pt-12 mb-10'>
      <img src="https://plus.unsplash.com/premium_photo-1668359408663-e18c2dabc0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' ml-12 lg:ml-44 w-[70vw] h-64 object-cover mb-5 rounded-lg' />
      <form>
        <div className=' ml-5 lg:ml-36 flex items-center'>
            <label htmlFor="fileinput"><GrAdd className=' w-6 h-6 rounded-[50%] border-solid border-2 text-xl text-gray-600 cursor-pointer' title='Add An Image'/></label>
            <input type="file" id='fileinput' className=' hidden' />
            <input type="text" placeholder='Title' autoFocus={true} className=' text-3xl border-none p-5 w-[70vw] outline-none ml-1 lg:ml-2 placeholder:font-semibold font-semibold' style={{border:'solid 1px gray'}} />
        </div>
        <div className=' ml-12 lg:ml-44 flex items-center mt-5'>
            <textarea placeholder='Tell Your Story...' rows='8' className=' text-xl w-[70vw] p-5 outline-none' type='text' style={{border:'solid 1px gray',"fontFamily": "Lora, serif"}}/>
        </div>
        <button className=' mt-5 bg-yellow-700 hover:bg-yellow-900 p-3 rounded-xl ml-60 lg:ml-[1060px]' style={{"fontFamily": "Ubuntu, sans-serif"}}>Publish</button>
      </form>
    </div>
  </>
  )
}
