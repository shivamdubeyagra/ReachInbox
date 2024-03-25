import React from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";

const AllInboxCards = () => {
  return (
    <div className='text-white w-full max-w-md flex flex-col justify-center border-b border-gray-700 p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold'>Beata@gmail.com</h1>
        <p className='text-gray-500'>Mar 7</p>
      </div>
      <p className='text-sm'>I've tried a lot and.</p>
      <div className='flex items-center mt-4'>
        <button className='flex justify-center items-center bg-gray-800 py-1 px-4 rounded-2xl mr-4 lin'>
          <GoDotFill/><span className='ml-1'>Interested</span>
        </button>
        <button className='flex justify-center items-center bg-gray-800 py-1 px-4 rounded-2xl'>
          <IoIosSend/><span className='ml-1' style={{whiteSpace:'nowrap'}}>Campaign Name</span>
        </button>
      </div>
    </div>
  );
};

export default AllInboxCards;
