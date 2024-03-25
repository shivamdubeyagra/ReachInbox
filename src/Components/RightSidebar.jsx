import React from 'react'

const RightSidebar = () => {
  return (
    <div >
      <div className='bg-gray-900 p-2 pr-10 text-white border border-gray-800 rounded-lg m-1 mt-4 text-xl font-semibold'>
        Lead Details
      </div>
      <div className='mt-7 m-5 mb-11'>
        <div className='flex justify-between text-white mt-7'>
        <p>Name</p>
        <p className='text-gray-500'>Orlando</p>
        </div>
        <div className='flex justify-between text-white mt-7'>
          <p>Contact No</p>
          <p className='text-gray-500'>+54-9062827869</p>
        </div>
        <div className='flex justify-between text-white mt-7'>
          <p>Email ID</p>
          <p className='text-gray-500'>orlando@gmail.com</p>
        </div>
        <div className='flex justify-between text-white mt-7'>
          <p>Linkedin</p>
          <p className='text-gray-500'>linkedin.com/in/timvadde/</p>
        </div>
        <div className='flex justify-between text-white mt-7'>
          <p>Company Name</p>
          <p className='text-gray-500'>Reachinbox</p>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar