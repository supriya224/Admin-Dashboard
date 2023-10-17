import React from 'react'
// import { Search } from 'react-feather';
// import { BiSearchAlt2 } from "react-icons/bi";
function SearchBar() {
  return (
    <div className='w-[70%]'>
    <div className="flex m-5 justify-between ">
    <h1 className="ml-2 p-0 flex">Hello Shahrukh 👋🏻  </h1>
   
   <div className='bg-white pl-1 w-[120px] flex justify-between rounded-sm items-center '>
   <i className="fa fa-search pl-1 pt-0.5 flex items-center text-gray-500" aria-hidden="true"></i>
            <input className="ml-1 text-gray-200"
                   type="text" placeholder='search'/>
   
   </div>
    
  </div>
  </div>
  )
}

export default SearchBar