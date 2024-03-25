import React from 'react'
import { MdLightMode } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full bg-[#1F1F1F] text-white border-b border-gray-700'>
        <h1 className='ml-5'>Onebox</h1>
        <div className='flex items-center justify-center'>
            <MdLightMode className='mr-10'/>
            <div className='flex justify-center items-center mr-5' >
            <p>Tim's Workspace</p>
            <RiArrowDropDownLine size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar