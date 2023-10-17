import React from "react";
import MenuItems from "../config/MenuItems.config";
import { FaBullseye } from "react-icons/fa";
import {RiArrowDropDownLine } from 'react-icons/ri'
// import Main from "./model/Main";

function SideNavBar() {

  return (
    // <div className="w-[300px] p-5 pl-9 bg-blue-950 h-screen shadow-blue-300 shadow-md">
    <div className="w-[300px] p-5 pl-9 bg-blue-950 h-screen shadow-blue-300 shadow-md">
      <div
        className="flex gap-2 mb-12 text-3xl text-bold cursor-pointer text-white
          rounded-sm p-2 "    
      >
        {" "}
        <FaBullseye />
        <h3>Dashboard</h3>
      </div>

      {MenuItems()?.map((item, i) => {
        return (
          <div
            key={item.key}
            className="flex gap-1 mb-4 cursor-pointer text-white hover:bg-blue-400 
          rounded-sm p-2 hover:font-semibold transition-all duration-400"
          >
            {item.icon}
            <p className="text-white">{item.label}</p>
            <p className="pl-20 col-span-3"> {item.img}</p>
          </div>
        );
      })}
      <button className="w-full h-16 bg-blue-950 text-white relative top-52 bottom-0 rounded-md  hover:bg-blue-400 
         p-2 hover:font-semibold transition-all duration-400 ">
      <img src="https://www.apetogentleman.com/wp-content/uploads/2021/10/Gentleman-720x864.jpg" alt="" className="w-9 rounded-full absolute top-3"/>
      <h4>Evano</h4><h5> Project Manager<RiArrowDropDownLine size={30} />
      </h5>
    
      </button>
  
    </div>
  );
}

/* <div className="p-5 mt-5 bg-white rounded-lg">
      <h2 className="text-[17px] font-bold items-center">
        Recent Folder
        <span className="float-right text-blue-500 text-[13px]">View All</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4">
        {folderList.map((item) => (
          <FolderItems folder={item} />
        ))}
      </div>
    </div> */

export default SideNavBar;
