import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineTwitter,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    const [cat,SetCat] = useState([])

    useEffect(()=>{
        const getCat = async ()=>{
            const res = await axios.get("http://localhost:5000/api/categories")
            SetCat(res.data)
        }
        getCat()
    },[])
  return (
    <>
    <div className=' sidebar flex-[3] p-5 pb-8 bg-[#fdfbfb] flex flex-col items-center rounded-[10px]'>
        <div className=' sidebarItem flex flex-col items-center'>
            <span className=' sidebarTitle m-3 p-1 w-[80%] text-center' style={{"borderTop":"1px solid #a7a4a4","borderBottom":"1px solid #a7a4a4","fontFamily": "Ubuntu, sans-serif"}}>
                ABOUT
            </span>
            <img src='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='...' className=' mt-4 '/>
            <p className=' p-7' style={{"fontFamily": "Lora, serif"}}>However, your potential users don’t know yet just how top-notch your app is. You need to set the path that leads them to you. So unless you’re Medium and you can get away with copying and pasting an entire Slack conversation as part of your app’s updates, it’s time to seek out the wordsmith in you. We’re here to help with these tips on how to write a great app description in order to drive organic traffic and increase downloads.</p>
        </div>
    
        <div className=' sidebarItem flex flex-col items-center'>
                <span className=' sidebarTitle m-3 p-1 w-[80%] text-center' style={{"borderTop":"1px solid #a7a4a4","borderBottom":"1px solid #a7a4a4","fontFamily": "Ubuntu, sans-serif"}}>
                    CATEGORIES
                </span>
        <ul className=' sidebarList mb-8 inline-block w-[50%] gap-3 pl-4 items-center'>
            {cat.map((m)=>{
                return (<li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl cursor-pointer hover:text-yellow-900 gap-2' style={{"fontFamily": "Ubuntu, sans-serif"}}><Link to={`/?cat=${m.Name}`}>{m.Name}</Link></li>)
            })}
            {/* <li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl  cursor-pointer hover:text-yellow-900' style={{"fontFamily": "Ubuntu, sans-serif"}}>Music</li>
            <li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl cursor-pointer hover:text-yellow-900' style={{"fontFamily": "Ubuntu, sans-serif"}}>Style</li>
            <li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl cursor-pointer hover:text-yellow-900' style={{"fontFamily": "Ubuntu, sans-serif"}}>Sport</li>
            <li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl cursor-pointer hover:text-yellow-900' style={{"fontFamily": "Ubuntu, sans-serif"}}>Tech</li>
            <li className=' sidebarlistItems inline-block w-[50%] mt-4 text-xl cursor-pointer hover:text-yellow-900' style={{"fontFamily": "Ubuntu, sans-serif"}}>Films</li> */}
        </ul>
            </div>
            <div className=' sidebarItem '>
            <span className=' sidebarTitle m-3 p-1 w-[80%] text-center' style={{"borderTop":"1px solid #a7a4a4","borderBottom":"1px solid #a7a4a4","fontFamily": "Ubuntu, sans-serif"}}>
                SOCIALLY CONNECT
            </span>
    <ul className=' sidebarSocials mt-4 flex items-center pl-8 gap-4'>
            <AiOutlineTwitter className=' text-2xl lg:text-3xl cursor-pointer hover:text-yellow-900'  />
            <AiFillGithub className=' text-2xl lg:text-3xl cursor-pointer hover:text-yellow-900'/>
            <AiFillLinkedin className=' text-2xl lg:text-3xl cursor-pointer hover:text-yellow-900'/>
    </ul>
        </div>

        </div>
  </>)
  
}
