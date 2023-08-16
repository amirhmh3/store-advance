import { useState } from "react";
import { BiSolidStar} from "react-icons/bi";
import img1 from "./../../assets/image/img1.jpg";
const ProductDescription = () => {
    const [tabId,setTabId]=useState(1);
    const handelTab=(tabId)=>{
        setTabId(tabId);
    }
    return ( <div className="w-full h-max px-4 mt-20">
        <div className="relative border-1 h-full px-7 pt-9 pb-6">
            <div className="absolute -top-5 left-0">
                <button onClick={()=>handelTab(1)} className={`py-2 lg:px-7 lg:text-lg text-xs px-2 rounded-md font-bold ${tabId===1?"bg-[#0d6efd] text-white":"bg-white border-1"}`}>Detail</button>
                <button onClick={()=>handelTab(2)} className={`py-2 lg:px-7 lg:text-lg text-xs px-2  rounded-md font-bold ${tabId===2?"bg-[#0d6efd] text-white":"bg-white border-1"}  mx-2`}>More Information</button>
                <button onClick={()=>handelTab(3)} className={`py-2 lg:px-7 lg:text-lg text-xs px-2  rounded-md font-bold ${tabId===3?"bg-[#0d6efd] text-white":"bg-white border-1"}`}>Reviews</button>
            </div>

            <div className={`${tabId===1?"block":"hidden"}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel quae veritatis doloribus eum nihil, nostrum sequi molestiae, quod debitis laudantium maxime modi ex neque obcaecati eos iusto facilis vero?
        </div>

            <div className={`${tabId===2?"block":"hidden"}`}>
            <ul className="list-disc">
                 <li className="flex my-2 text-gray-600"><p className="w-36 font-bold">Weight</p> 1000 g</li>
                 <li className="flex my-2 text-gray-600"><p className="w-36 font-bold">Dimensions</p> 35 × 30 × 7 cm</li>
                 <li className="flex my-2 text-gray-600"><p className="w-36 font-bold">Color</p> Black, Pink, Red, White</li>
            </ul>
        </div>

            <div className={`${tabId===3?"block":"hidden"}`}>
            <div className="flex border-b-1 pb-5 mb-5">
                <img className="w-20 h-20 rounded-lg" src={img1} alt="" />
                <div className="ml-2">
                    <h1 className="font-bold text-gray-700 mb-2">Jeny Doe</h1>
                    <div className="flex items-center mb-3">
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-gray-400" />
              </div>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ab natus accusamus odit cum quae minus numquam beatae ullam aut est ipsa corrupti repudiandae nobis reiciendis, officia labore earum optio.</p>
                </div>
            </div>

            <div className="flex border-b-1 pb-5 mb-5">
                <img className="w-20 h-20 rounded-lg" src={img1} alt="" />
                <div className="ml-2">
                    <h1 className="font-bold text-gray-700 mb-2">Jeny Doe</h1>
                    <div className="flex items-center mb-3">
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-gray-400" />
              </div>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ab natus accusamus odit cum quae minus numquam beatae ullam aut est ipsa corrupti repudiandae nobis reiciendis, officia labore earum optio.</p>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-bold text-gray-600 mb-2">Add a Review</h1>
                <div className="flex mb-3">
                <h2 className="text-gray-500">Your rating:</h2>
                <div className="flex items-center ml-1">
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-gray-400" />
                <BiSolidStar className="text-lg text-gray-400" />
                <BiSolidStar className="text-lg text-gray-400" />
              </div>
                </div>
                
            </div>

            <div className="block">
                <input type="text" className="w-full mb-4 px-5 py-2 h-12 border-1 text-gray-600 text-lg" placeholder="Name"/>
                <input type="email" className="w-full mb-4 px-5 py-2 h-12 border-1 text-gray-600 text-lg" placeholder="Email*"/>
                <textarea type="text" className="w-full mb-4 px-5 py-2 h-24 border-1 text-gray-600 text-lg" placeholder="Enter Your Comment"/>
                <input className="bg-blue-500 text-white font-bold text-lg hover:bg-gray-600 duration-300 px-4 py-2" type="submit" value="SUBMIT"/>
            </div>

            
        </div>
        </div>

        
    
    </div> );
}
 
export default ProductDescription;