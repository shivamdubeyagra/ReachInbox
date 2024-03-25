import React from 'react'
import AllInboxCards from './AllInboxCards'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const AllInbox = () => {
  return (
    <div className='w-[400px] px-3'>
      <div className='pt-10 pb-5 ml-3'>
        <h1 className='text-blue-500 text-2xl font-bold flex items-center'>All Inbox(s)<RiArrowDropDownLine /></h1>
        <p className='text-gray-500'><span className='font-bold text-white mr-1'>25/25</span>Inboxes selected</p>
      </div>
      <div className='relative ml-2'>
        <input type="text" placeholder='Search' className='bg-gray-800 placeholder:pl-10 p-2 rounded-md w-[95%] focus:outline-none'/>
        <CiSearch className='absolute top-2 text-2xl ml-5 text-gray-400'/>
      </div>
      <div className='text-white flex justify-between mt-3 px-2 text-xl'>
        <div>
          <span className='text-blue-500 bg-gray-800 px-3 py-1 rounded-2xl mr-1'>26</span>
          <span>New Replies</span>
        </div>
        <div className='flex justify-center items-center'>
          <span className='mr-1'>Newest</span>
          <RiArrowDropDownLine/>
        </div>
      </div>
      <AllInboxCards/>
      <AllInboxCards/>
      <AllInboxCards/>
      <AllInboxCards/>
      <AllInboxCards/>
    </div>
  )
}

export default AllInbox