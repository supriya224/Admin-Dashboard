import React from "react";

function Chart() {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg p-5 shadow-md  hover:shadow-md cursor-pointer text-yellow-300">
      <div className="w-[100%] h-80 text-red-400 justify-between">
        <div className=" flex absolute bottom-9 w-9 h-9 justify-between gap-3 bg-slate-700">
          Jan
        </div>
        <div className="grid absolute bottom-9 left-20 w-9 h-9 bg-blue-700">feb</div>
        <div className="flex-col absolute bottom-9 w-9 h-9 bg-slate-70">
          march
        </div>
        <div className="flex-col absolute bottom-9 justify-between left-80 w-9 h-9 bg-slate-700">
          april
        </div>
        <div className="flex-col absolute bottom-9 right-90 left-20 w-9 h-9 bg-slate-700">
          may
        </div>
        <div className="flex-col absolute bottom-9  left-20 w-9 h-9 bg-slate-700">
          june
        </div>
        <div className="flex-col absolute bottom-9  left-20 w-9 h-9 bg-slate-700">
          july
        </div>
        <div className="flex-col absolute bottom-9  left-20 w-9 h-9 bg-slate-700">
          august
        </div>
        <div className="flex-col absolute bottom-9  left-20 w-9 h-9 bg-slate-700">
          september
        </div>
        <div className="flex-col absolute bottom-9  left-20 w-9 h-9 bg-slate-700">
          october
        </div>
      </div>
      <div className='w-[10%] h-80 text-left text-red-400 bg-black'>

      </div>
    </div>
  );
}

export default Chart;
