import logo from "assets/logo.png";
import { BiUser , BiHeart , BiCart,BiSearch} from "react-icons/bi";
const Middle = () => {
  return (
    <>
      <div className="container mx-auto grid  grid-cols-3 my-5">
        <div className="flex justify-center 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-3 lg:mb-0 md:mb-0 mb-5">
          <img src={logo} alt="" />
        </div>
        <div className="flex 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-3 justify-center items-center mx-5">
          <div className="w-full relative">
            <BiSearch className="absolute top-3 right-4 text-xl  hover:text-pink-650 duration-300"/>
            <input className="w-full border-1 border-gray-300 rounded-full h-10 capitalize px-5 focus:outline-gray-300 focus-within:border-gray-300" type="text" placeholder="enter your product name" />
          </div>
        </div>
        <div className="justify-end items-center showf-lg">
            <BiUser className="text-4xl mx-2"/>
            <BiHeart className="text-4xl mx-2"/>
            <BiCart className="text-4xl mx-2"/>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Middle;
