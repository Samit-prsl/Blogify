import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const PF = "https://blogifyapi.onrender.com/images/"
  return (
    <>
    <Link to={`/post/${post._id}`}><div className=' post w-[330px] lg:w-[385px] m-6 text-md' style={{fontFamily: 'Varela Round, sans-serif'}}>
        {post.Photo && (
        <img src={PF + post.Photo} alt='...' className=' w-[100%] mt-3  h-[285px] object-cover rounded-lg'/>)}
        <div className=' postInfo flex flex-col items-center  lg:pr-0'>
            <div className=' postCats text-yellow-900 mt-4 flex gap-2 cursor-pointer '>
                {post.Categories.map((m)=>{
                    return (<span className='postcat'>
                    {m.Categories}
                </span>)
                    
                
                
})}
                {/* <span className='postcat'>
                    Music
                </span>
                <span className='postcat'>
                    Life
                </span> */}
            </div>
            <span className=' postTitle text-2xl mt-4 ' style={{fontFamily: 'Josefin Sans, sans-serif'}}>{post.Title}</span>
            <hr/>
            <span className=' postDate'>{new Date(post.createdAt).toDateString()}</span>
            
        </div>
        <p className=' postDesc text-sm text-yellow-800 p-3 mt-4' style={{"fontFamily": "Ubuntu, sans-serif"}}>
        {post.Desc}
        </p>
    </div>
    </Link>
  </>)
}
