import React from "react";
import { SiGmail } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiUserSearchFill } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen w-14 p-3 border-r border-gray-700">
      <div className="bg-white py-1 px-0.5 rounded flex justify-center items-center text-xl mt-1">
        <SiGmail />
      </div>
      <div className="text-2xl mt-24">
        <GoHomeFill
          
          className="hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <RiUserSearchFill
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <IoMail
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <IoIosSend
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <FaThList
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <FaInbox
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <RiBarChartFill
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
      </div>
        <div className="text-white text-xl bg-green-900 rounded-full flex justify-center items-center h-9 w-9 mt-[260px]">AS</div>
    </div>
  );
};

export default Sidebar;
