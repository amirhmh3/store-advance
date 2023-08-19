import React, { useState } from "react";
import spinner from "assets/gif/spinner.gif";
const Sidbar = ({category,loding}) => {
  const [isCheckedCategory, setIsCheckedCategory] = useState(true);
  const [isCheckedSize, setIsCheckedSize] = useState(true);

  const handleCheckboxChangeCategory = (event) => {
    setIsCheckedCategory(event.target.checked);
  };

  const handleCheckboxChangeSize = (event) => {
    setIsCheckedSize(event.target.checked);
  };
  return (
    <>
      <div className="">
        <h1 className="text-lg font-bold px-2 py-3 bg-[#f7f7f7] text-gray-500 mb-7">
          Filter Products By
        </h1>

        <div className="pb-5 mb-5 border-b-1">
          <h2 className="text-lg text-gray-700 mb-3">category</h2>
          <div className="w-full flex items-center">
            <input className="w-4 h-4" type="checkbox" onChange={handleCheckboxChangeCategory} checked={isCheckedCategory} name="" />
            <label className="ml-3 text-lg text-gray-500">All</label>
          </div>
          {loding?<img className="col-span-3 w-full" src={spinner} alt="" />:category.map((c,index)=>(
            <div key={index} className="w-full flex items-center">
            <input className="w-4 h-4" type="checkbox" name="" />
            <label className="ml-3 text-lg text-gray-500">{c.name}</label>
          </div>
          ))}
        </div>

        <div className="pb-5 mb-5 border-b-1">
          <h2 className="text-lg text-gray-700 mb-3">Size</h2>
          <div className="w-full flex items-center my-2">
            <input className="w-4 h-4" type="checkbox" onChange={handleCheckboxChangeSize} checked={isCheckedSize} name="" />
            <label className="ml-3 text-sm text-gray-500">S</label>
          </div>
          <div className="w-full flex items-center my-2">
            <input className="w-4 h-4" type="checkbox" name="" />
            <label className="ml-3 text-sm text-gray-500">M</label>
          </div>
          <div className="w-full flex items-center my-2">
            <input className="w-4 h-4" type="checkbox" name="" />
            <label className="ml-3 text-sm text-gray-500">L</label>
          </div>
          <div className="w-full flex items-center my-2">
            <input className="w-4 h-4" type="checkbox" name="" />
            <label className="ml-3 text-sm text-gray-500">XL</label>
          </div>
          <div className="w-full flex items-center my-2">
            <input className="w-4 h-4" type="checkbox" name="" />
            <label className="ml-3 text-sm text-gray-500">XXL</label>
          </div>
        </div>

        <div className="pb-5 border-b-1">
          <h2 className="text-lg text-gray-700 mb-3">Color</h2>
          <div className="grid grid-cols-8">
            <div className="rounded-full w-5 h-5 bg-[#1b4a87] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#5f94d6] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#72aea2] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#c79782] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#c4d6f9] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#ff748b] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#2bff4a] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#ffef00] mx-2 my-2"></div>
            <div className="rounded-full w-5 h-5 bg-[#ffef00] mx-2 my-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidbar;
