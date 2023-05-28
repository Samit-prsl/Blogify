import React from 'react'
import SinglePost from '../Components/SinglePost'
import Sidebar from '../Components/Sidebar'
export default function Single() {
  return (
    <>
    <div className=' single lg:flex'>
        <SinglePost/>
        <Sidebar/>
    </div>
  </>
  )
}
