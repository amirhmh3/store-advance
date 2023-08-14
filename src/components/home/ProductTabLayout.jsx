import { useState,useEffect } from "react";
import { BiSolidStar,BiHeart,BiShow,BiCartAlt } from "react-icons/bi";
import img1 from "./../../assets/image/img1.jpg";
import spinner from "./../../assets/gif/spinner.gif";
const ProductTabLayout = ({products,loding}) => {
    const [category,setCategory]=useState(0)
    const [product,setProduct]=useState(products.slice(0,8));
    const handelTab=(tabId)=>{
      if (tabId===0) 
        setProduct(products.slice(0,8));
        else
        setProduct(products.filter(p=>p.category.name===tabId));
      
        setCategory(tabId);
    }
    useEffect(()=>{
      setProduct(products.slice(0,8));
    },[products]);

    return ( <>
    <div className="flex"> 
    <h1 className="w-full font-bold text-gray-700 text-xl mb-5">
                  New Products
                </h1>
                <ul className="flex">
                  <li onClick={()=>handelTab(0)} className={`mx-7 ${category===0?"text-pink-650":"text-gray-400"}`}>All</li>
                  <li onClick={()=>handelTab("men's fashion")} className={`mx-7 ${category==="men's fashion"?"text-pink-650":"text-gray-400"}`}>Clothes</li>
                  <li onClick={()=>handelTab("women's fashion")} className={`mx-7 ${category==="women's fashion"?"text-pink-650":"text-gray-400"}`}>Footwear</li>
                  <li onClick={()=>handelTab("bags & shoes")} className={`mx-7 ${category==="bags & shoes"?"text-pink-650":"text-gray-400"}`}>Accessories</li>
                </ul>
                </div>


              <hr className="mb-5" />
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:sm:grid-cols-2 grid-cols-1">
              {!!loding?<img src={spinner} className="xl:col-span-4 lg:col-span-3 md:sm:col-span-2 col-span-1 w-full"></img>:
              !!product.length?product.map((p,index)=>(
                
                <div key={index} className="rounded-3xl border-1 overflow-hidden m-4 group hover:shadow-lg transition-all duration-500">
                    <div className="h-52 overflow-hidden relative">
                        <div className="flex flex-col absolute -right-10 group-hover:right-2 duration-300 top-2 z-50">
                            <div className="bg-white inline-block rounded-lg border-1 my-1">
                            <BiHeart className="text-lg m-1 text-gray-400"/>
                            </div>
                            <div className="bg-white inline-block rounded-lg border-1 my-1">
                            <BiShow className="text-lg m-1 text-gray-400"/>
                            </div>
                            <div className="bg-white inline-block rounded-lg border-1 my-1">
                            <BiHeart className="text-lg m-1 text-gray-400"/>
                            </div>
                            <div className="bg-white inline-block rounded-lg border-1 my-1">
                            <BiCartAlt className="text-lg m-1 text-gray-400"/>
                            </div>
                        </div>
                    <img className="w-full h-full group-hover:scale-110 duration-500" src={img1} alt="" />
                    </div>
                    <div className="px-5 mt-3">
                    <h1 className="uppercase text-sm text-pink-650 my-3">{p.category.name}</h1>
                    <p className="text-sm my-2 h-10">
                    {p.title}
                    </p>
                    <div className="flex my-5">
            <BiSolidStar className="text-sm text-yellow-400" />
            <BiSolidStar className="text-sm text-yellow-400" />
            <BiSolidStar className="text-sm text-yellow-400" />
            <BiSolidStar className="text-sm text-yellow-400" />
            <BiSolidStar className="text-sm text-yellow-400" />
          </div>

          <h4 className="my-5 text-black text-sm font-bold">
            ${p.price-15}.00{" "}
            <span className="line-through text-sm text-gray-500 ml-3 font-normal">
              ${p.price}.00
            </span>
          </h4>

                    </div>
                    
                </div>
            
              )):<div className="m-5 col-span-4 block text-center font-bold"><h1>notProduct</h1></div>}
              </div>

                
    </> );
}
 
export default ProductTabLayout;