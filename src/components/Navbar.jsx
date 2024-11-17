import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav,setNav] =useState(false);
    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className=' text-colorFour flex w-80 py-2 rounded-3xl justify-center  h-8 scroll-smooth'>
    <ul className='flex justify-between w-full h-full items-center px-4'>
      <li className='flex-1 text-center border-r-2 cursor-pointer hover:text-xl hover:font-bold ease-in-out duration-200'><a href="#home" className=''>Anil</a></li>
      <li className='flex-1 text-center border-r-2 cursor-pointer hover:text-xl hover:font-bold ease-in-out duration-200'><a href="#about">About</a></li>
      <li className='flex-1 text-center border-r-2 cursor-pointer hover:text-xl hover:font-bold ease-in-out duration-200'><a href="#projects">Projects</a></li>
      <li className='flex-1 text-center cursor-pointer hover:text-xl hover:font-bold ease-in-out duration-200'><a href="#contact">Contact</a></li>
      {/* <li>Aboout</li>
      <li>Projects</li>
      <li>Contact</li> */}
    </ul>
  </div>
  )
}

export default Navbar
