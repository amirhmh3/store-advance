import { BiSolidStar } from "react-icons/bi";
const BoxProduct1 = ({product}) => {
    return ( <div className="px-5">

        <div className="border-lg p-4 border-1 rounded-lg lg:col-span-1 md:col-span-2 sm:col-span-4 col-span-4 md:mx-auto md:mb-5 sm:mb-5 mb-5 w-full   mx-auto">
    <img
      className=" xl:h-80 lg:h-64 w-full sm:h-80 h-80"
      src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
      alt=""
    />
    <div className="text-start mt-3">
      <h1 className=" w-72 text-lg text-gray-500 mb-2 line-clamp-1">{product.title}</h1>
      <div className="flex items-center ml-1">
        <BiSolidStar className="text-lg text-pink-650" />
        <BiSolidStar className="text-lg text-pink-650" />
        <BiSolidStar className="text-lg text-gray-400" />
        <BiSolidStar className="text-lg text-gray-400" />
        <BiSolidStar className="text-lg text-gray-400" />
      </div>
      <div className="flex">
        <h4 className="line-through text-gray-400">${product.price}.00</h4>
        <h4 className="text-gray-600 font-bold ml-2">${product.price-15}.00</h4>
      </div>
      <div className="flex mt-2 justify-between">
      <div className="flex">
          <div className="rounded-full w-5 h-5 bg-[#1b4a87] mr-1"></div>
          <div className="rounded-full w-5 h-5 bg-[#5f94d6] mx-1"></div>
          <div className="rounded-full w-5 h-5 bg-[#72aea2] mx-1"></div>
          <div className="rounded-full w-5 h-5 bg-[#c79782] mx-1"></div>
        </div>
        <div className="flex">
          <h1 className="px-2 py-1 bg-[#e2e2e2]  text-xs flex items-center hover:bg-gray-400 duration-300">S</h1>
          <h1 className="px-2 py-1 bg-[#e2e2e2] mx-1 text-xs flex items-center hover:bg-gray-400 duration-300">M</h1>
          <h1 className="px-2 py-1 bg-[#e2e2e2]  text-xs flex items-center hover:bg-gray-400 duration-300">XL</h1>
        </div>
      </div>
    </div>
  </div>
    </div> );
}
 
export default BoxProduct1;