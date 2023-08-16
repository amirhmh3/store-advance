import { BiSolidStar, BiLogoInstagram, BiLogoFacebook ,BiLogoTwitter,BiLogoLinkedin,BiHeart,BiShow} from "react-icons/bi";
import spinner from "./../../assets/gif/spinner.gif"
import TimerBoxOff from "./TimerBoxOff";
const ProductDetails = ({product,loding}) => {
    return ( <div className="px-5">
      {loding?<img className="w-full h-full" src={spinner}></img>:
      <>
        <h1 className="text-xl font-bold text-gray-700 mb-5 line-clamp-1">{product.title}</h1>
        <div className="flex mb-4">
        <div className="flex items-center">
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-pink-650" />
                <BiSolidStar className="text-lg text-gray-400" />
              </div>
              <span className="px-5  items-center text-gray-300">|</span>
              <p className="flex items-center text-gray-600 underline">Be the first to review this product</p>
        </div>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quasi autem vitae voluptate quis doloremque commodi perspiciatis officiis optio possimus modi eligendi esse placeat nulla rerum velit aperiam incidunt! Quisquam?</p>
        <div className="my-7 p-4 border-1 rounded-lg">
            <h1 className="capitalize mb-4">real time <span className="text-white bg-blue-500 font-bold pr-1">18</span> visitor right now!</h1>
            <h5 className="mb-1 text-sm">Hurry up!left 17 in stock</h5>
            <div className="h-2 w-full bg-neutral-200 dark:bg-[#edecff] rounded-lg overflow-hidden flex items-center mb-5">
                <div className="h-full bg-[#555] w-1/3  rounded-sm"></div>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div className="lg:col-span-2 col-span-3">
                <TimerBoxOff startDay={456}
              startHour={23}
              startMinute={10}
              startSecond={0}/>
                </div>
              <h1 className="text-gray-500 font-bold lg:col-span-1 col-span-3">Time is Running Out!</h1>
              </div>
        </div>
        <div className="flex justify-between pb-4 border-b-1 mb-4">
                <div>
                    <h3 className="text-gray-600">As Low as</h3>
                    <h1 className="font-bold text-xl">${product.price}.00</h1>
                </div>
                <div>
                    <h3 className="uppercase text-gray-600">in Stock</h3>
                    <h1 className="uppercase font-bold">Sku#: wh12</h1>
                </div>
              </div>

              <h1 className="mb-2">SIZE</h1>
              <div className="flex">
                <h1 className="px-2 py-1 bg-[#e2e2e2] mr-2 text-sm flex items-center">S</h1>
                <h1 className="px-2 py-1 bg-[#e2e2e2] mx-2 text-sm flex items-center">M</h1>
                <h1 className="px-2 py-1 bg-[#e2e2e2] mx-2 text-sm flex items-center">L</h1>
                <h1 className="px-2 py-1 bg-[#e2e2e2] mx-2 text-sm flex items-center">XL</h1>
              </div>

<div className="border-b-1 pb-5 mb-5">
<h1 className="mt-5 mb-2 ">COLOR</h1>
              <div className="flex">
                <div className="rounded-full w-6 h-6 bg-[#1b4a87] mr-2"></div>
                <div className="rounded-full w-6 h-6 bg-[#5f94d6] mx-2"></div>
                <div className="rounded-full w-6 h-6 bg-[#72aea2] mx-2"></div>
                <div className="rounded-full w-6 h-6 bg-[#c79782] mx-2"></div>
              </div>
</div>

<div className="flex pb-5 mb-5 border-b-1">
    <div className="flex items-center w-32 h-10 text-center border-1 font-bold">
        <h1 className="w-1/3 text-3xl text-gray-500">-</h1>
        <h1 className="w-1/3 border-x-1">1</h1>
        <h1 className="w-1/3 text-2xl text-gray-500">+</h1>
    </div>
    <button className="uppercase h-10 w-40 px-4 mx-3 bg-[#3474d4] font-bold text-white">Add To Cart</button>
    <div className="w-10 h-10 border-1 flex justify-center items-center hover:bg-[#3474d4] hover:text-white text-lg mr-1"><i><BiHeart/></i></div>
    <div className="w-10 h-10 border-1 flex justify-center items-center hover:bg-[#3474d4] hover:text-white text-lg ml-1"><i><BiShow/></i></div>
</div>

<div className="flex text-lg">
<i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoFacebook />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoTwitter />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoInstagram />
          </i>
          <i className="p-1 m-2 bg-gray-100 text-gray-500 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
            <BiLogoLinkedin />
          </i>
</div>
</>
}
              
    </div> );
}
 
export default ProductDetails;