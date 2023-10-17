import React from "react";
// import { } from "react-icons/fc";
// import Chart from "./chart/Chart";
import {
  FcBriefcase,
  FcDataConfiguration,
  FcCurrencyExchange,
  FcDiploma2,
} from "react-icons/fc";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Charts from "./Charts/BarChart";


function Main() {
  const mainList = [
    {
      id: 1,
      name: "Earning",
      title: "$198k",
      img: <AiOutlineArrowUp size={15} color="green" />,
      paragraph: "37.8% this month",
      icon: <FcCurrencyExchange size={60} color="green" />,
    },
    {
      id: 2,
      name: "order",
      title: "$2.4k",
      img: <AiOutlineArrowDown size={15} color="red" />,
      paragraph: "2% this month",
      icon: <FcDiploma2 size={60} color="purple" />,
    },
    {
      id: 3,
      name: "Balance",
      title: "$2.4k",
      img: <AiOutlineArrowDown size={15} color="red" />,
      paragraph: "2% this month",
      icon: <FcDataConfiguration size={60} color="sky-blue" />,
    },
    {
      id: 4,
      name: "Total sales",
      title: "$89k",
      img: <AiOutlineArrowUp size={15} color="green" />,
      paragraph: "11% this week",
      icon: <FcBriefcase size={60} color="pink" />,
    },
  ];
  return (
    <div className="flex absolute top-9 left-72 flex-row justify-center items-center h-[130px] m-12 mt-28 rounded-lg">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[16rem]">
          {mainList?.map((item) => (
            <div
              className="w-[235px] flex flex-col justify-between items-center h-[150px]
            m-2 bg-white rounded-lg p-5 shadow-md  hover:shadow-md cursor-pointer"
            >
              <div
                className="grid grid-cols-2 w-full h-9 m-18 justify-between md:grid-cols-3 
              lg:grid-cols-4 xl:grid-cols-5 gap-9"
              >
                <div className="w-[60px] h-[60px] p-1 rounded-full">
                  {item.icon}
                </div>
                <div className="grid grid-row pl-7">
                  <p className="text-gray-500 grid text-[12px]"> {item.name}</p>
                  <p className="text-black font-bold flex-row text-lg flex"> {item.title} </p>
                  <p className="grid"> {item.img}</p>
                  <p className="flex text-[10px]">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    {/* <div className="flex w-[70%]  rounded-xl absolute top-48 left-1">  <Chart/></div> */}
    <Charts/>
       
     
    </div>
  );
}

export default Main;
