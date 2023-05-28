import React from 'react'

export default function Header() {
  return (
    <>
    <div className=' headerTitles pt-16 flex flex-col items-center'>
        <span className=' sm text-yellow-950  absolute top-[12%] lg:top-[16%] text-xl lg:text-2xl' style={{"fontFamily": "Lora, serif"}}>Welcome to</span>
        <span className=' lg text-yellow-950  absolute top-[14%] lg:top-[19%] text-[100px]'  style={{"fontFamily": "Lora, serif"}}>Blogify!</span>
    </div>
    <img src='https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='...' className=' image w-full mt-20 h-[450px] object-cover'/>
    </>
  )
}
