import React from 'react'
import Post from './Post'


export default function Posts({posts}) {
  return (
    <>
    <div className=' posts lg:flex-[9] lg:flex lg:flex-wrap lg:justify-between'>
      {posts.map((p)=>{
        return(<Post post={p}/>)
      })}
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}
    </div>
  </>)
}
