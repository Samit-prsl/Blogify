import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import Posts from '../Components/Posts'
import Sidebar from '../Components/Sidebar'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts,Setposts] = useState([]);
  const {search} = useLocation()
  //console.log(search);

  useEffect(()=>{
    const fetchposts = async () =>{
      const res = await axios.get("https://blogifyapi.onrender.com/api/post"+ search )
      Setposts(res.data);
      //console.log(res);
    }
    fetchposts()
  },[search])
  return (
    <>
    <div>
        <Header/>
        <div className=' home lg:flex'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
    </div>
    </>
  )
}
