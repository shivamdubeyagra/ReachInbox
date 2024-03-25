import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdReply } from "react-icons/md";
import Button from "./Button";
const MailBody = () => {
  return (
    <div className="w-[1100px]">
      <div className="w-full border-b h-[90px] border-gray-800 text-white flex justify-between items-center">
        <div className="px-5 py-5 ">
          <p className="font-bold text-l">Orlando</p>
          <p className="text-sm text-gray-500">orladom@gmail.com</p>
        </div>
        <div className="flex w-[50%] justify-evenly items-center">
          <div className="flex justify-center items-center border border-gray-800 bg-gray-900 p-2 rounded-lg">
            <span class="inline-block bg-yellow-400 w-5 h-5 rounded-full border-4 border-gray-700 mr-1"></span>
            <span>Meeting Completed</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div className="flex justify-center items-center border border-gray-800 bg-gray-900 p-2 px-3 rounded-lg">
            <span>Move</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div className=" bg-gray-900 p-2 px-3 rounded-lg border border-gray-800">
            <BsThreeDots size={30} />
          </div>
        </div>
      </div>
      <div className="relative mx-5">
        <div className="w-full flex justify-center items-center text-white mt-3">
          <span className="px-4 py-1 bg-gray-900 z-10">Today</span>
        </div>
        <div className="border absolute top-4 w-full border-gray-900"></div>
      </div>
      <div className="w-[1057px] h-[286px] border border-gray-800 mt-3 mx-5 bg-gray-900 text-white p-5 rounded-lg">
        <div className="flex justify-between">
          <p className="text-xl">New Product Launch</p>
          <p className="text-gray-600 font-bold mt-2">20 june 2022 : 9:16AM</p>
        </div>
        <p className="mt-2 text-gray-500">
          from : jeanne@icloud.com cc : lennon.j@mail.com
        </p>
        <p className="mt-2 text-gray-500">to : lennon.j@mail.com</p>
        <div className="w-[50%]">
          <p className="mt-8">Hi SHIVAM</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magnam facilis maiores quidem enim ducimus, quod totam possimus commodi nihil.</p>
        </div>
      </div>
      <div className="relative mx-5">
        <div className="w-full flex justify-center items-center text-white mt-3 cursor-pointer">
          <span className="px-4 py-1 bg-gray-900 z-10">View all <span className="text-blue-400 ">4</span> replies</span>
        </div>
        <div className="border absolute top-4 w-full border-gray-900"></div>
      </div>
      <div className="p-5 mt-[276px] relative cursor-pointer">
        <MdReply color="white" className="absolute top-7 left-12" size={30}/>
      <Button text={'reply'}/>
      </div>
    </div>
  );
};

export default MailBody;
