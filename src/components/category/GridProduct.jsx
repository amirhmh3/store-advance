import { useState, useEffect } from "react";
import BoxProduct1 from "componets/commen/box/BoxProduct1";
import spinner from "assets/gif/spinner.gif";
const GridProduct = ({ products,loding}) => {
  const [groupProduct,setProduct] = useState([]);
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    setProduct(!!products && products.length ? products.slice(0, 9) : []);
    // setCategory(!!Categorys && Categorys.length ? Categorys : []);
  },[products]);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between pb-5 mb-5 border-b-1">
        {loding?<img className="col-span-3 w-full" src={spinner} alt="" />:!!groupProduct.length ? (
          groupProduct.map((p, index) => (
            <BoxProduct1 key={index} product={p} />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <h1>No Product</h1>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-gray-500">Showing 1-12 of 21 item(s)</h1>
        <div className="flex  items-center">
          <div className="w-8 h-8 text-white bg-blue-500 ml-px  hover:bg-blue-500 hover:text-white duration-300">
            <h1 className="w-full h-full flex justify-center items-center">1</h1>
          </div>
          <div className="w-8 h-8 bg-white ml-px hover:bg-blue-500 hover:text-white duration-300">
            <h1 className="w-full h-full flex justify-center items-center">2</h1>
          </div>
          <div className="w-8 h-8 bg-white ml-px  hover:bg-blue-500 hover:text-white duration-300">
            <h1 className="w-full h-full flex justify-center items-center">3</h1>
          </div>
          <div className="w-8 h-8 bg-white ml-px  hover:bg-blue-500 hover:text-white duration-300">
            <h1 className="w-full h-full flex justify-center items-center">4</h1>
          </div>
          <div className="w-8 h-8 bg-white ml-px  hover:bg-blue-500 hover:text-white duration-300">
            <h1 className="w-full h-full flex justify-center items-center">5</h1>
          </div>
          <div className="w-auto px-4 h-8 bg-white ml-px  hover:bg-blue-500 hover:text-white duration-300 border-1">
            <h1 className="w-full h-full flex justify-center items-center">Next{">"}</h1>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default GridProduct;
