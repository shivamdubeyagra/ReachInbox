import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import AllInboxCards from "../Components/AllInboxCards";
import AllInbox from "../Components/AllInbox";
import MailBody from "../Components/MailBody";
import RightSidebar from "../Components/RightSidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="bg-black w-full flex" style={{ minHeight: "calc(100vh - 64px)" }}>
            <AllInbox />
          <div  className="border-r border-l border-gray-800" style={{ minHeight: "calc(100vh - 64px)" }}>
            <MailBody/>
          </div>
          <div className="w-full" style={{ minHeight: "calc(100vh - 64px)" }}>
            <RightSidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
